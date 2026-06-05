# Aiagency

A premium marketing website for an AI product studio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- Single landing page with a dedicated working contact route
- Sticky navigation with accessible mobile menu
- Animated hero and polished product sections
- Contact form with client-side validation and API wiring
- SEO-ready metadata, JSON-LD schema, sitemap, and robots.txt
- Responsive design, WCAG AA contrast, and reduced motion support

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## API

- `POST /api/contact` accepts JSON with `name`, `email`, `company`, `projectType`, `budget`, `message`, and `hp` (honeypot).
- Client and server validation are included.

## Environment

Create a `.env.local` file and add the email delivery configuration:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_RECIPIENT_EMAIL=khan97faraz@gmail.com
```

If you want all enquiries delivered to your inbox, set `CONTACT_RECIPIENT_EMAIL` to your email address.

## Deploy

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Set `RESEND_API_KEY` in Vercel Environment Variables if sending emails.

## Notes

- The site is designed for a global English-speaking audience.
- All placeholder copy is polished, concise, and ready for a professional launch.
