// Read the Documentation : https://nextjs.org/docs/app/building-your-application/routing/middleware

import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log("Middleware Executed...");

    const authToken = request.cookies.get("authToken")?.value;
    // console.log("Middleware : Token -> ",authToken);

    if(request.nextUrl.pathname === "/api/login"){
        return;
    }

    // If the User is LoggedIn, then they can't access Login and SignUp paths.
    const loggedInUserNotAccessPaths = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup";
    // After Logged In (i.e, You will have authToken), if you're Trying to access the Login or SignUp paths, you'll automatically redirect to user profile path.
    if(loggedInUserNotAccessPaths){
        // Accessing not secured Routes
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }
    else{
        // if you're not LoggedIn, then 1st Logged In, before trying to access secured routes.
        if(!authToken){
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}
 
// See "Matching Paths" below to learn more
export const config = { 
    // Specify the routes where middleware should execute
    // matcher: '/add-task',
    // matcher: '/api/:path*',
    matcher: [
              '/',
              '/add-task',
              '/show-task',
              '/login',
              '/signup',
              '/api/:path*',
              '/profile/:path*',
            ],
};