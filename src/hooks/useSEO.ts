import { useCallback, useEffect, useRef } from 'react';

interface TwitterCardProps {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

interface StructuredDataProps {
  type?: 'WebPage' | 'Article' | 'BlogPosting' | 'Organization' | 'Person' | 'Product' | 'FAQ';
  data?: Record<string, any>;
}

interface SearchEngineOptimizationProps {
  // Basic meta tags
  title: string;
  description: string;
  keywords?: Array<string>;
  author?: string;
  robots?: string;
  canonical?: string;

  // Open Graph
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'video' | 'music';
  ogSiteName?: string;
  ogLocale?: string;

  // Twitter Card
  twitter?: TwitterCardProps;

  // Additional meta tags
  viewport?: string;
  charset?: string;
  themeColor?: string;
  appleTouchIcon?: string;
  favicon?: string;

  // Structured data
  structuredData?: StructuredDataProps;

  // Language and locale
  lang?: string;
  hreflang?: Array<{ lang: string; url: string }>;

  // Article specific (for blog posts, news articles)
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: Array<string>;

  // Custom meta tags
  customMeta?: Array<{ name?: string; property?: string; content: string; httpEquiv?: string }>;
}

export const useSearchEngineOptimization = (props: SearchEngineOptimizationProps) => {
  const {
    title,
    description,
    keywords = [],
    author,
    robots = 'index, follow',
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageAlt,
    ogUrl,
    ogType = 'website',
    ogSiteName,
    ogLocale = 'en_US',
    twitter,
    viewport = 'width=device-width, initial-scale=1.0',
    charset = 'UTF-8',
    themeColor,
    appleTouchIcon,
    favicon,
    structuredData,
    lang = 'en',
    hreflang = [],
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    articleTags = [],
    customMeta = [],
  } = props;

  const addedElements = useRef<Set<Element>>(new Set());

  const setMetaTag = useCallback((attributes: Record<string, string>, content: string) => {
    if (!content) return;

    const selector = Object.entries(attributes)
      .map(([key, value]) => `[${key}="${value}"]`)
      .join('');

    let element = document.querySelector(`meta${selector}`) as HTMLMetaElement;

    if (!element) {
      element = document.createElement('meta');
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
      document.head.appendChild(element);
      // Only track elements WE created so we don't accidentally delete static HTML tags
      addedElements.current.add(element);
    }

    element.setAttribute('content', content);
  }, []);
  
  const setLinkTag = useCallback((attributes: Record<string, string>) => {
    const selector = Object.entries(attributes)
      .filter(([key]) => key !== 'href')
      .map(([key, value]) => `[${key}="${value}"]`)
      .join('');

    let element = document.querySelector(`link${selector}`) as HTMLLinkElement;

    if (!element) {
      element = document.createElement('link');
      document.head.appendChild(element);
      addedElements.current.add(element);
    }

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }, []);

  const setStructuredData = useCallback((data: StructuredDataProps) => {
    if (!data.type || !data.data) return;

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript && addedElements.current.has(existingScript)) {
      existingScript.remove();
      addedElements.current.delete(existingScript);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';

    const structuredDataObj = {
      '@context': 'https://schema.org',
      '@type': data.type,
      ...data.data,
    };

    script.textContent = JSON.stringify(structuredDataObj);
    document.head.appendChild(script);
    addedElements.current.add(script);
  }, []);

  const cleanupPreviousElements = useCallback(() => {
    addedElements.current.forEach((element) => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    addedElements.current.clear();
  }, []);

  useEffect(() => {
    // Set document title
    const originalTitle = document.title;
    document.title = title;

    // Set document language
    document.documentElement.lang = lang;

    // Set charset
    if (charset) {
      setMetaTag({ charset }, '');
    }

    // Set viewport
    if (viewport) {
      setMetaTag({ name: 'viewport' }, viewport);
    }

    // Basic meta tags
    setMetaTag({ name: 'description' }, description);

    if (keywords.length > 0) {
      setMetaTag({ name: 'keywords' }, keywords.join(', '));
    }

    if (author) {
      setMetaTag({ name: 'author' }, author);
    }

    if (robots) {
      setMetaTag({ name: 'robots' }, robots);
    }

    if (themeColor) {
      setMetaTag({ name: 'theme-color' }, themeColor);
    }

    // Canonical URL
    if (canonical) {
      setLinkTag({ rel: 'canonical', href: canonical });
    }

    // Favicon
    if (favicon) {
      setLinkTag({ rel: 'icon', href: favicon });
    }

    // Apple touch icon
    if (appleTouchIcon) {
      setLinkTag({ rel: 'apple-touch-icon', href: appleTouchIcon });
    }

    // Open Graph tags
    const finalOgTitle = ogTitle || title;
    const finalOgDescription = ogDescription || description;
    const finalOgUrl = ogUrl || window.location.href;

    setMetaTag({ property: 'og:title' }, finalOgTitle);
    setMetaTag({ property: 'og:description' }, finalOgDescription);
    setMetaTag({ property: 'og:url' }, finalOgUrl);
    setMetaTag({ property: 'og:type' }, ogType);
    setMetaTag({ property: 'og:locale' }, ogLocale);

    if (ogImage) {
      setMetaTag({ property: 'og:image' }, ogImage);
      if (ogImageAlt) {
        setMetaTag({ property: 'og:image:alt' }, ogImageAlt);
      }
    }

    if (ogSiteName) {
      setMetaTag({ property: 'og:site_name' }, ogSiteName);
    }

    // Twitter Card tags
    if (twitter) {
      const {
        card = 'summary',
        site,
        creator,
        title: twitterTitle,
        description: twitterDescription,
        image: twitterImage,
      } = twitter;

      setMetaTag({ name: 'twitter:card' }, card);

      if (site) {
        setMetaTag({ name: 'twitter:site' }, site);
      }

      if (creator) {
        setMetaTag({ name: 'twitter:creator' }, creator);
      }

      setMetaTag({ name: 'twitter:title' }, twitterTitle || finalOgTitle);
      setMetaTag({ name: 'twitter:description' }, twitterDescription || finalOgDescription);

      if (twitterImage || ogImage) {
        setMetaTag({ name: 'twitter:image' }, twitterImage || ogImage!);
      }
    }

    // Article meta tags (for blog posts, news articles)
    if (articleAuthor) {
      setMetaTag({ name: 'article:author' }, articleAuthor);
    }

    if (articlePublishedTime) {
      setMetaTag({ name: 'article:published_time' }, articlePublishedTime);
    }

    if (articleModifiedTime) {
      setMetaTag({ name: 'article:modified_time' }, articleModifiedTime);
    }

    if (articleSection) {
      setMetaTag({ name: 'article:section' }, articleSection);
    }

    if (articleTags.length > 0) {
      articleTags.forEach((tag) => {
        setMetaTag({ name: 'article:tag' }, tag);
      });
    }

    // Hreflang tags
    hreflang.forEach(({ lang: hrefLang, url }) => {
      setLinkTag({ rel: 'alternate', hreflang: hrefLang, href: url });
    });

    // Custom meta tags
    customMeta.forEach((meta) => {
      const attributes: Record<string, string> = {};

      if (meta.name) attributes.name = meta.name;
      if (meta.property) attributes.property = meta.property;
      if (meta.httpEquiv) attributes['http-equiv'] = meta.httpEquiv;

      setMetaTag(attributes, meta.content);
    });

    // Structured data
    if (structuredData) {
      setStructuredData(structuredData);
    }

    // Cleanup function
    return () => {
      document.title = originalTitle;
      cleanupPreviousElements();
    };
  }, [
    title,
    description,
    keywords,
    author,
    robots,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageAlt,
    ogUrl,
    ogType,
    ogSiteName,
    ogLocale,
    twitter,
    viewport,
    charset,
    themeColor,
    appleTouchIcon,
    favicon,
    structuredData,
    lang,
    hreflang,
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    articleTags,
    customMeta,
    setMetaTag,
    setLinkTag,
    setStructuredData,
    cleanupPreviousElements,
  ]);

  // Return utility functions for dynamic updates
  return {
    updateTitle: (newTitle: string) => {
      document.title = newTitle;
    },
    updateDescription: (newDescription: string) => {
      setMetaTag({ name: 'description' }, newDescription);
    },
    updateKeywords: (newKeywords: string[]) => {
      setMetaTag({ name: 'keywords' }, newKeywords.join(', '));
    },
    addCustomMeta: (attributes: Record<string, string>, content: string) => {
      setMetaTag(attributes, content);
    },
  };
};

// Usage example:
/*
const MyComponent = () => {
  const seoUtils = useSearchEngineOptimization({
    title: "My Awesome Page | My Website",
    description: "This is an awesome page with great content that users will love.",
    keywords: ["awesome", "page", "react", "seo"],
    author: "John Doe",
    canonical: "https://mywebsite.com/awesome-page",
    
    // Open Graph
    ogTitle: "My Awesome Page",
    ogDescription: "This is an awesome page with great content.",
    ogImage: "https://mywebsite.com/og-image.jpg",
    ogImageAlt: "Screenshot of my awesome page",
    ogType: "article",
    ogSiteName: "My Website",
    
    // Twitter
    twitter: {
      card: "summary_large_image",
      site: "@mywebsite",
      creator: "@johndoe",
    },
    
    // Article specific
    articleAuthor: "John Doe",
    articlePublishedTime: "2024-01-01T12:00:00Z",
    articleSection: "Technology",
    articleTags: ["react", "seo", "web development"],
    
    // Structured data
    structuredData: {
      type: "Article",
      data: {
        headline: "My Awesome Page",
        author: {
          "@type": "Person",
          name: "John Doe",
        },
        datePublished: "2024-01-01T12:00:00Z",
        image: "https://mywebsite.com/og-image.jpg",
      },
    },
    
    // Custom meta tags
    customMeta: [
      { name: "rating", content: "general" },
      { property: "fb:app_id", content: "123456789" },
    ],
  });

  return <div>Your component content</div>;
};
*/
