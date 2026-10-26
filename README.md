# hlee.tw

Personal site of Hsuan Lee: founder, software engineer, photographer.
Plain static HTML/CSS/JS, no build step. Deployed on Vercel at https://hlee.tw.

## Local preview

```sh
npx serve .     # or: python3 -m http.server
```

## Editing content

Markup lives in `index.html`; translated strings (English + 繁體中文) live in `i18n.js`. Elements still holding placeholder text carry
`class="placeholder"` (shown with a dashed amber outline and a label). Replace the
text and remove the class.

- **Work**: each `<li class="entry">` in `#work` is one role.
- **Photos**: images live in `/photos` (long edge ≤ 1800px). Each `<figure class="frame">`
  in `#photos` is one frame; its caption text is `photo.N` in `i18n.js`. Frames render
  as a film negative and "develop" on hover/tap.

## Deploy (Vercel)

1. Import this repo in Vercel (framework preset: **Other**, no build command, output dir `.`).
2. Project → Settings → Domains: add `hlee.tw` and `www.hlee.tw`.
3. At your DNS provider: `A hlee.tw → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`
   (or use the values Vercel shows). `vercel.json` redirects `www` to the apex.
