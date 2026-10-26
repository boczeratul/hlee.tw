# hlee.tw

Personal site of Hsuan Lee: founder, software engineer, photographer.
Plain static HTML/CSS/JS, no build step. Deployed on Vercel at https://hlee.tw.

## Local preview

```sh
npx serve .     # or: python3 -m http.server
```

## Editing content

Everything lives in `index.html`. Elements still holding placeholder text carry
`class="placeholder"` (shown with a dashed amber outline and a label). Replace the
text and remove the class.

- **Work**: each `<li class="entry">` in `#work` is one role.
- **Photos**: drop images into `/photos` and replace each `<div class="ph" …></div>`
  with `<img src="/photos/name.jpg" alt="…" loading="lazy" />`. Frames render as a
  film negative and "develop" on hover/tap.

## Deploy (Vercel)

1. Import this repo in Vercel (framework preset: **Other**, no build command, output dir `.`).
2. Project → Settings → Domains: add `hlee.tw` and `www.hlee.tw`.
3. At your DNS provider: `A hlee.tw → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`
   (or use the values Vercel shows). `vercel.json` redirects `www` to the apex.
