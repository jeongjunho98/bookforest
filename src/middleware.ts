import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 관리자 페이지 보호 로직
  if (pathname.startsWith('/admin')) {
    // 실제 서비스 시에는 쿠키나 세션 토큰을 확인합니다.
    // 현재는 프로토타입 수준에서 접근 제어 흐름만 구축합니다.
    const adminToken = request.cookies.get('admin_token');
    
    // 토큰이 없거나 유효하지 않으면 로그인으로 리다이렉트
    if (!adminToken) {
      // 보안을 위해 관리자 권한이 없음을 알리는 쿼리 파라미터를 추가할 수 있습니다.
      // return NextResponse.redirect(new URL('/login?error=unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
