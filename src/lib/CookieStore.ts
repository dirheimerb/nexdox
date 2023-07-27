const day = 24 * 60 * 60 * 1000;
export interface CookieSerializeOptions {
  path?: string;
  domain?: string;
  maxAge?: number;
  expires?: Date;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'lax' | 'strict' | 'none' | boolean;
  encode?(val: string): string;
  decode?(val: string): string;
}

export function serialize(
  name: string,
  val: string,
  options: CookieSerializeOptions = {},
): string {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  const pairs = [name + '=' + enc(val)];

  if (null != opt.maxAge) {
    const maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge))
      throw new Error('maxAge should be a Number');
    pairs.push('Max-Age=' + maxAge);
  }

  if (opt.domain) pairs.push('Domain=' + opt.domain);
  if (opt.path) pairs.push('Path=' + opt.path);
  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
  if (opt.httpOnly) pairs.push('HttpOnly');
  if (opt.secure) pairs.push('Secure');
  if (opt.sameSite) {
    const sameSite =
      typeof opt.sameSite === 'string'
        ? opt.sameSite.toLowerCase()
        : opt.sameSite;
    switch (sameSite) {
      case true:
        pairs.push('SameSite=Strict');
        break;
      case 'lax':
        pairs.push('SameSite=Lax');
        break;
      case 'strict':
        pairs.push('SameSite=Strict');
        break;
      case 'none':
        pairs.push('SameSite=None');
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return pairs.join('; ');
}

export class CookieStore {
  private readonly _cookie: string;
  private readonly _cookieName: string;
  private readonly _cookieOptions: CookieSerializeOptions;

  constructor(
    cookie: string,
    cookieName: string,
    cookieOptions: CookieSerializeOptions = {},
  ) {
    this._cookie = cookie;
    this._cookieName = cookieName;
    this._cookieOptions = cookieOptions;
  }

  get(): string | undefined {
    return this._cookie
      .split(';')
      .find((c) => c.trim().startsWith(`${this._cookieName}=`))
      ?.split('=')[1];
  }

  set(value: string): void {
    document.cookie = serialize(this._cookieName, value, this._cookieOptions);
  }

  delete(): void {
    document.cookie = serialize(this._cookieName, '', {
      ...this._cookieOptions,
      maxAge: -1,
    });
  }

  static getCookieOptions(): CookieSerializeOptions {
    return {
      path: '/',
      maxAge: day,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    };
  }
}
