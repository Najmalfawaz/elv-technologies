import { NextResponse, type NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protected admin routes
    if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
        const isAdmin = request.cookies.get('admin_session')?.value;

        if (!isAdmin) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
