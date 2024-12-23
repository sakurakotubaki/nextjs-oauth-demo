import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({
  returnTo: '/api/auth/login',
});

// 保護するパスを指定
export const config = {
  matcher: [
    // 保護されたルート
    '/profile',
    '/dashboard/:path*',
    '/api/protected/:path*',
    
    // 認証関連のルートは除外
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
