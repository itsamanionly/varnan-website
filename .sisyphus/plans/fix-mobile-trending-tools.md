# Fix Mobile Responsiveness for Trending Tools

## Goal
The `/trending-tools` index page and `/trending-tools/[slug]` article pages are breaking mobile viewports (e.g. on iPhone 12 Pro Max). The horizontal content inside cards and code blocks is overflowing its container boundaries.

## Scope Boundaries
**IN SCOPE:**
- Fix horizontal layout wrapping in `components/trending-tools.tsx` (the metadata tags and card spacing).
- Fix horizontal overflow in `app/trending-tools/[slug]/page.tsx` specifically targeting `<pre>` blocks inside the Markdown renderer.
- Ensure the article content wraps gracefully and scrolls horizontally internally if needed, rather than stretching the whole page.

**OUT OF SCOPE:**
- Fixing general Next.js configuration or modifying other pages unless they suffer from the identical overflow bug currently.

## Implementation Tasks

1. **Fix Metadata Wrap in Trending Tools Card Component:**
   - File: `components/trending-tools.tsx`
   - Modify the `<div>` holding the metadata tags (Trending Tools, read time, date):
     - FROM: `<div className="flex items-center gap-4 text-sm text-gray-500 font-mono mb-4">`
     - TO: `<div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 font-mono mb-4">`
   - Adding `flex-wrap` and making text smaller on mobile (`text-xs md:text-sm`) prevents it from forcing the card's width past the screen edge.

2. **Fix Horizontal Overflow in Article Page (`[slug]`)**
   - File: `app/trending-tools/[slug]/page.tsx`
   - Make the following `<main>` and `<article>` container adjustments:
     - FROM: `<main className="flex-grow">`
     - TO: `<main className="flex-grow w-full overflow-hidden">`
     - FROM: `<article className="max-w-5xl mx-auto px-4 py-8 font-merri">`
     - TO: `<article className="max-w-5xl mx-auto px-4 md:px-6 py-8 font-merri w-full">`
   - Prevent `<h1 ...>` text from breaking bounds: add `break-words` class.
   - Constrain the Markdown `prose` container:
     - FROM: `<div className="prose prose-lg max-w-none">{post.content}</div>`
     - TO: `<div className="prose prose-base md:prose-lg max-w-none w-full break-words prose-pre:max-w-[85vw] md:prose-pre:max-w-full prose-pre:overflow-x-auto">{post.content}</div>`
   - This ensures the text scales nicely, words break properly, and code blocks (`prose-pre`) don't stretch the container—they will scroll horizontally within their own bounds.

## Final Verification Wave
- Test `/trending-tools` on mobile simulation (dev tools) to confirm the metadata tags wrap correctly and don't push the screen right.
- Test `/trending-tools/top-6-github-repositories-to-supercharge-your-ai-agent-in-2026` on mobile to ensure the code block scrolls horizontally, but the main page does not.
