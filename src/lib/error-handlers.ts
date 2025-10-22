import { notFound } from 'next/navigation';

/**
 * Utility function to handle 410 Gone errors
 * Use this when content has been permanently removed
 */
export function handleGoneError() {
  // Redirect to the gone page
  notFound(); // This will trigger the not-found.tsx page
}

/**
 * Utility function to handle 404 Not Found errors
 * Use this when content is temporarily unavailable
 */
export function handleNotFoundError() {
  notFound();
}

/**
 * Check if a route should return 410 Gone
 * Add your removed routes here
 */
export function isRouteGone(pathname: string): boolean {
  const goneRoutes = [
    '/old-service', // Example: old service page
    '/legacy-blog', // Example: old blog structure
    '/deprecated-feature', // Example: removed feature
    // Add more routes that have been permanently removed
  ];

  return goneRoutes.some(route => pathname.startsWith(route));
}

/**
 * Get appropriate error response for a given pathname
 */
export function getErrorResponse(pathname: string) {
  if (isRouteGone(pathname)) {
    return {
      status: 410,
      message: 'This content has been permanently removed.',
      redirect: '/gone'
    };
  }
  
  return {
    status: 404,
    message: 'Page not found.',
    redirect: null
  };
}
