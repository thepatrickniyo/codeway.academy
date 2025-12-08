import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Check ENV variable from process.env (server-side), fallback to MODE for production detection
  // process.env is available in server-side middleware, import.meta.env requires VITE_ prefix
  const env = process.env.ENV || import.meta.env.MODE || 'development';
  const url = context.url;

  // Block /admin route in production
  if (env === 'production' && url.pathname.startsWith('/admin')) {
    return Response.redirect(new URL('/404', url));
  }

  return next();
});

