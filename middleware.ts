import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protected admin routes (UI and API)
    const isAdminRoute = path.startsWith('/admin');
    const isAdminApiRoute = path.startsWith('/api/admin');
    const isAuthRoute = path.startsWith('/admin/login') || 
                        path.startsWith('/api/admin/login') || 
                        path.startsWith('/api/admin/logout');

    if ((isAdminRoute || isAdminApiRoute) && !isAuthRoute) {
        const isAdmin = request.cookies.get('admin_session')?.value;

        if (!isAdmin) {
            if (isAdminApiRoute) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
