import { useEffect, useState } from 'react';

interface ProjectPreviewProps {
  url: string;
  image: string;
  alt: string;
  title: string;
}

export default function ProjectPreview({ url, image, alt, title }: ProjectPreviewProps) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loaded, setLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowFallback(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowFallback(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) return;

    const timeout = setTimeout(() => {
      if (!loaded) {
        setShowFallback(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isOnline, loaded]);

  if (!isOnline || showFallback) {
    return (
      <div className='relative w-full h-full border border-port-light-border dark:border-port-light-primary/20 overflow-hidden rounded-xl'>
        <img src={image} alt={alt} className='w-full h-full object-cover' />{' '}
      </div>
    );
  }

  return (
    <div className='relative w-full h-full border border-port-light-border dark:border-port-light-primary/20 overflow-hidden rounded-xl'>
      {!loaded && (
        <img src={image} alt={alt} className='absolute inset-0 w-full h-full object-cover' />
      )}

      <iframe
        src={url}
        title={title}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
