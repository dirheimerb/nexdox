import { CookieStore, serialize } from '../lib/CookieStore';

const cookieStore = new CookieStore(
  document.cookie,
  'cookie-name',
  CookieStore.getCookieOptions(),
);

console.log(cookieStore.get()); // $ExpectType string | undefined
