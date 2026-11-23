# Deployment - Vercel

- Project root: this folder (the folder containing `index.html`).
- Framework preset: none / static. Do not invent a build command - this is a plain static site.
- Build command: none.
- Output directory: project root.
- Environment variables: none required.

Steps: Vercel dashboard -> Add New -> Project -> Import `quiz-goal` from GitHub
-> confirm root directory is the repository root -> Deploy -> test the live URL
on desktop and mobile, including a full quiz, navigation, and refresh on each page.

Note: the canonical / sitemap URL in the site is `https://quiz-goal.vercel.app`
(provisional). If Vercel assigns a different subdomain, update `BASE_URL` in
`build_site.py`, rebuild, and push again.
