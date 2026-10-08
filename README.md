# NestVerify

A front-end prototype of a transparency tool for home buyers. The idea: let a buyer follow a residential project's construction against the dates the builder promised, compare projects side by side, and see a builder's delivery record before paying.

> **Status: UI prototype with sample data.** Everything the app shows comes from one file of invented data, `src/data.ts`, or is written directly into the pages. There is no backend, database, login or payment, and no connection to RERA or any other registry. The builders, projects, ratings, registration numbers, reviews and delays are fictional.

## Pages

| Route | Page | What it shows |
|---|---|---|
| `/` | Landing | The pitch for buyers, with sample projects and cities |
| `/explore` | Search | The list of sample projects |
| `/project/:id` | Project detail | One project: construction timeline with planned and actual dates, progress updates, unit configurations, amenities, reviews, nearby places and the builder's record |
| `/compare` | Comparison | A side-by-side comparison layout |
| `/dashboard` | Buyer dashboard | Tracked projects, notifications, messages and appointments |
| `/builder-landing` | Builder landing | The pitch for builders, with a sign-up form |
| `/builder-dashboard` | Builder dashboard | Leads, conversations and a leads-and-views chart |

## What is and is not real

- **Real:** the routing, layouts, components and interactions of a seven-page React app, typed with TypeScript.
- **Sample data:** four projects, four leads, two conversations, three notifications and six months of analytics, all in `src/data.ts`.
- **Not built:** accounts and roles, saving anything, sending messages, submitting forms, uploading photos, verifying a builder or a registration number, alerts, and any server.

Nothing you do in the app is stored. Reloading the page resets it.

## Run it

Run `npm install`, then `npm run dev`, and open http://localhost:3000.

## Stack

React 19, TypeScript, Vite 6, Tailwind CSS 4, React Router 7, Recharts and Motion.

## What a real version would need

- A backend and database for projects, updates, reviews and messages.
- Accounts with separate buyer, builder and admin roles.
- A lawful, reliable source for registration data, which differs by state.
- A way to verify that a progress photo is recent and from the site.
- Moderation for reviews, and a process for builders to respond.

## License

See [LICENSE](LICENSE).
