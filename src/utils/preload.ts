// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload API endpoint
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://mypowerly.com/v1';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Call on app initialization
if (typeof window !== 'undefined') {
  preloadCriticalResources();
}
