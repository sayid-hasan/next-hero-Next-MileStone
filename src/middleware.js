import { NextResponse } from "next/server";

export const middleware = (request) => {
  return NextResponse.rewrite(new URL("/dashboard", request.url));
};
export const config = {
  matcher: ["/about"],
};
