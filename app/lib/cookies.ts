import { createCookie } from '@remix-run/node';

export const transportMethodCookie = createCookie('transportMethod', {
  maxAge: 60 * 60 * 24 * 7, // 1 week
});
