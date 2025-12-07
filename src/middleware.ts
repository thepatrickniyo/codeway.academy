import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Check ENV variable, fallback to NODE_ENV for production detection
  const env = import.meta.env.ENV || import.meta.env.MODE || 'development';
  const url = context.url;

  // Block /admin route in production
  if (env === 'production' && url.pathname.startsWith('/admin')) {
    return Response.redirect(new URL('/404', url));
  }

  return next();
});

