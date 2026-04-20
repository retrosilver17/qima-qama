# Qima Qama Security Guide

This project currently has a fairly small attack surface because it is mostly a content-driven Next.js site. That said, future additions such as forms, uploads, authentication, admin tools, or external APIs can introduce risk quickly if they are not handled carefully.

## Current baseline

- `.env*` files are ignored by git.
- No API keys were found in the checked-in source code.
- Browser security headers are configured in `next.config.ts`.
- Next.js has been updated to a patched version after a vulnerability audit.

## Rules for secrets

- Never commit API keys, tokens, or credentials into the repository.
- Never put secrets in `NEXT_PUBLIC_*` environment variables.
- Use Vercel environment variables for secrets.
- Read secrets only in server-side code.
- If a key is ever accidentally exposed, rotate it immediately instead of only deleting it from the code.

## Rules for user input

- Treat all user input as untrusted.
- Validate input shape, length, and allowed characters on the server.
- Sanitize rich text or HTML before rendering it.
- Do not use `dangerouslySetInnerHTML` unless content is sanitized first.
- Escape or encode any content that is reflected back into the page.

## Rules for uploads

- Restrict uploads by MIME type and file size.
- Rename files on the server instead of trusting user-provided names.
- Do not execute uploaded files.
- Store uploads outside executable server paths where possible.
- Virus scanning should be added if public uploads are introduced.

## Rules for APIs

- Keep sensitive API routes server-only.
- Add rate limiting before exposing public write endpoints.
- Require authentication and authorization for admin features.
- Log important failures without logging secrets or private user data.
- Return generic error messages to users and detailed errors only to server logs.

## Rules for dependencies

- Run `npm audit` regularly.
- Keep `next`, `react`, and other critical packages updated.
- Avoid adding packages that are not clearly needed.
- Prefer mature, actively maintained libraries.

## Before deployment

- Confirm the production URL is set correctly in metadata.
- Confirm all secrets are configured in Vercel and not in code.
- Run:

```bash
npm audit --audit-level=high
npx tsc --noEmit
npm run build
```

## When new features are added

If you later add:

- contact forms
- comments
- search inputs
- login/auth
- dashboards
- file uploads
- CMS editing
- third-party APIs

run another security pass before publishing those changes.
