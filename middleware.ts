import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const city = request.geo?.city || 'The Four States Area'
  const response = NextResponse.next()
  response.headers.set('x-user-city', city)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon, icons, and media assets
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|webm|ico|mp4)$).*)',
  ],
}
