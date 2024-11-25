import { clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

// I want to make anything beginning with /posts protected 
// user has to be signed in.
// /posts itself is protected
// so is /posts/blah-blah 

const isProtectedRoute = createRouteMatcher(["/posts(.*)", "/animals"])


// if the next request (the user navigates) to a protect route, we're going to call the protect() function. That will deny them until they sign in.
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    // the matcher finds matches for any routes of your application
    // if the match is on a public routes, middleware doesn't trigger
    // if the match is for a private route, middleware will trigger with auth
    // uses regex to find matches
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};