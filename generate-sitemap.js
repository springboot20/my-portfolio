import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const env = process.env.VITE_NODE_ENV;

console.log(env);

/**
 * @type Record<string, any>
 */
const config = {
  baseUrl:
    env === 'production' ? 'https://codesuite-portfolio.vercel.app' : 'http://localhost:3001',
  outputPath: './public/sitemap.xml',
  routes: [],
};

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  config.routes.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${config.baseUrl}${route.url}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

// Ensure the directory exists
/**
 *
 * @param {string} filePath
 */
function ensureDirectoryExists(filePath) {
  // Get the directory name from the file path
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemapXML = generateSitemap();
    ensureDirectoryExists(config.outputPath);
    fs.writeFileSync(config.outputPath, sitemapXML, 'utf8');

    console.log(`✅ Sitemap generated successfully at: ${config.outputPath}`);
    console.log(`📊 Total URLs: ${config.routes.length}`);
    console.log(`🔗 Base URL: ${config.baseUrl}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
  }
}

/**
 *
 * Discover routes from the pages directory
 * @param {string} routesPath
 * @returns {Array<{url: string, changefreq: string, priority: string, lastmod: string}>}
 */
function discoveredRoutes(routesDir = './src/pages') {
  const discovered = [];

  if (fs.existsSync(routesDir)) {
    // Recursive read to find files inside folders like /home/home.tsx
    const files = fs.readdirSync(routesDir, { recursive: true });

    files.forEach((file) => {
      // 1. Only process React component files
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        // 2. Extract just the filename without the path or extension
        // Example: "home/home.tsx" -> name: "home"
        const { name } = path.parse(file);

        let finalPath = '';

        // 3. Match "home" or "index" to the root route "/"
        if (name.toLowerCase() === 'home' || name.toLowerCase() === 'index') {
          finalPath = '/';
        } else {
          // 4. Otherwise, use the filename as the slug
          // Example: "about/about-me.tsx" -> "/about-me"
          finalPath = `/${name}`;
        }

        // 5. Assign Priority
        const priority = finalPath === '/' ? '1.0' : '0.8';

        discovered.push({
          url: finalPath,
          changefreq: 'monthly',
          priority: priority,
          lastmod: fs.statSync(path.join(routesDir, file)).mtime.toISOString().split('T')[0],
        });
      }
    });
  }

  // Deduplicate in case you have both home.tsx and home/index.tsx
  return Array.from(new Map(discovered.map((item) => [item.url, item])).values());
}
// function discoveredRoutes(routesDir = './src/pages') {
//   const discovered = [];

//   if (fs.existsSync(routesDir)) {
//     // We use { recursive: true } to find nested pages
//     const files = fs.readdirSync(routesDir, { recursive: true });

//     files.forEach((file) => {
//       // 1. Only process component files, exclude styles, tests, or stories
//       if (
//         (file.endsWith('.tsx') || file.endsWith('.jsx')) &&
//         !file.includes('.test.') &&
//         !file.includes('.spec.') &&
//         !file.startsWith('_')
//       ) {
//         let route = file
//           .replace(/\\/g, '/') // Normalize Windows paths
//           .replace(/\.(tsx|jsx|ts|js)$/, '') // Remove extensions
//           .replace(/\/page$/, '') // Clean up Next.js style naming if used
//           .replace(/\/index$/, '') // Remove /index
//           .replace(/home$/, ''); // If home is in a folder, make it root

//         // Handle the root path
//         route = route === 'home' || route === '' ? '/' : `/${route}`;

//         // 2. Assign Priority based on importance
//         let priority = '0.5';
//         if (route === '/') priority = '1.0';
//         if (['/projects', '/about-me'].includes(route)) priority = '0.8';

//         discovered.push({
//           url: route,
//           changefreq: 'monthly',
//           priority: priority,
//           lastmod: fs.statSync(path.join(routesDir, file)).mtime.toISOString().split('T')[0],
//         });
//       }
//     });
//   }

//   // Use a Set to prevent duplicate "/" if you have home.tsx and index.tsx
//   const uniqueRoutes = Array.from(new Map(discovered.map((item) => [item.url, item])).values());
//   return uniqueRoutes;
// }

// Run the script if it's the main module
if (import.meta.url === new URL(import.meta.url).href) {
  config.routes = discoveredRoutes();
  writeSitemap();
}
