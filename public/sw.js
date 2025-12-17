/**
 * Service Worker for offline functionality and caching
 */

const CACHE_NAME = 'aylen-montenegro-v3';
const STATIC_CACHE = 'static-v3';
const DYNAMIC_CACHE = 'dynamic-v3';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/elevate',
  '/deploy',
  '/spill',
  '/upgrade',
  '/read',
  '/shop',
  '/favicon.ico',
  '/favicon.svg',
  '/site.webmanifest',
  '/browserconfig.xml'
];

// Assets to cache on demand
const CACHE_PATTERNS = [
  /^\/images\//,
  /^\/videos\//,
  /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif|webp|mp4)$/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(url.pathname)) {
    // Static assets - cache first strategy
    event.respondWith(handleStaticAsset(request));
  } else if (isPageRequest(request)) {
    // Pages - network first with cache fallback
    event.respondWith(handlePageRequest(request));
  } else {
    // Other requests - network first
    event.respondWith(handleOtherRequest(request));
  }
});

// Check if request is for a static asset
function isStaticAsset(pathname) {
  return CACHE_PATTERNS.some(pattern => pattern.test(pathname));
}

// Check if request is for a page
function isPageRequest(request) {
  return request.headers.get('accept')?.includes('text/html');
}

// Handle static asset requests (cache first)
async function handleStaticAsset(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Error handling static asset', error);
    return new Response('Asset not available offline', { status: 503 });
  }
}

// Handle page requests (network first)
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache');
    
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return new Response(getOfflinePage(), {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    return new Response('Page not available offline', { status: 503 });
  }
}

// Handle other requests (network first)
async function handleOtherRequest(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    return await cache.match(request) || new Response('Resource not available offline', { status: 503 });
  }
}

// Offline page HTML
function getOfflinePage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Offline - Aylen Montenegro</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #121216 0%, #0c0d11 50%, #0a0a0d 100%);
          color: white;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .container {
          max-width: 500px;
          padding: 2rem;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .retry-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .retry-btn:hover {
          background: #2563eb;
        }
        .status {
          margin-top: 2rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>You're Offline</h1>
        <p>
          It looks like you've lost your internet connection. 
          Don't worry, you can still browse some cached content.
        </p>
        <button class="retry-btn" onclick="window.location.reload()">
          Try Again
        </button>
        <div class="status">
          <strong>Connection Status:</strong> Offline<br>
          <strong>Last Sync:</strong> ${new Date().toLocaleString()}
        </div>
      </div>
      <script>
        // Check for online status
        window.addEventListener('online', () => {
          window.location.reload();
        });
      </script>
    </body>
    </html>
  `;
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('Service Worker: Performing background sync');
  
  try {
    // Get pending form submissions from IndexedDB
    const pendingSubmissions = await getPendingSubmissions();
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch(submission.url, {
          method: submission.method,
          headers: submission.headers,
          body: submission.body
        });
        
        if (response.ok) {
          // Remove from pending queue
          await removePendingSubmission(submission.id);
          console.log('Service Worker: Synced submission', submission.id);
        }
      } catch (error) {
        console.error('Service Worker: Failed to sync submission', error);
      }
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: data.tag || 'default',
      data: data.data,
      actions: data.actions || []
    })
  );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action) {
    // Handle action buttons
    console.log('Notification action clicked:', event.action);
  } else {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for IndexedDB (simplified)
async function getPendingSubmissions() {
  // In a real implementation, this would read from IndexedDB
  return [];
}

async function removePendingSubmission(id) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Removing pending submission:', id);
}
