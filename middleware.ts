import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await auth();

  // If user is not logged in and not already on /login or /api
  if (
    !session?.user &&
    !req.nextUrl.pathname.startsWith("/login") &&
    !req.nextUrl.pathname.startsWith("/api")
  ) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|/login).*)"],
};
