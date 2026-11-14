import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get('accept') || '';
  
  // Serve clean Markdown when requested by AI agents
  if (acceptHeader.includes('text/markdown') && request.nextUrl.pathname === '/') {
    const markdownContent = `# Clearby Services\n\nDigital Engineering & Growth Agency in Pune.\n\n- Phone: +91-7020112146\n- Email: contact@clearbyresearch.com\n- Website: https://clearbyservices.com\n- Political Division: https://clearbypolitical.com/`;
    
    const res = new NextResponse(markdownContent, {
      status: 200,
      headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    });
    
    res.headers.set(
      'Link',
      '<https://clearbyservices.com/llms.txt>; rel="alternate"; type="text/markdown"; title="LLM Summary"'
    );
    return res;
  }

  // Advertise llms.txt via Link headers on standard responses
  const response = NextResponse.next();
  response.headers.set(
    'Link',
    '<https://clearbyservices.com/llms.txt>; rel="alternate"; type="text/markdown"; title="LLM Summary"'
  );
  return response;
}

export const config = {
  matcher: '/',
};