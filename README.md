# This is WalkAbout

This project is part of the 2024 Creative Media & Gaming Technologies course called "Medialab" in collaboration with Kenniscentrum Zorginnovatie

This is a project designed for elderly to help them to walk more. Keeping the elderly active, for example by walking with Walkabout, also helps with fall prevention.

WalkAbout is build using Remix and uses Supabase for the database.

## Technologies

The most important technologies used for this project:

- [Remix](https://remix.run/docs/en/main) React framework
- [TailwindCSS](https://tailwindcss.com/docs) for styling
- [Supabase](https://supabase.com/) Postgres database and authentication
- [Prettier] For code formatting
- [Husky](https://typicode.github.io/husky/) For pre commit hooks, to ensure the entire codebase uses the same code styling

## What happens where? 

A brief outline of the structure of the project:
```
root/
├── .husky
├── app/
│   ├── components/
│   ├── routes/
│   ├── root.tsx
│   ├── tailwind.css 
│   ├── lib/
│   │   ├── queries.ts
│   │   ├── postgres-client.ts
```

`.husky` > Pre-commit scripts to run all the style linters

`app/` -> main application files

`app/routes` -> all the route files for the application

`app/root.tsx` -> the start of the application  

`app/tailwind.css` -> the main CSS file for normal CSS and tailwind declarations  

`app/components` -> all UI components for the app

`app/lib/queries.ts` -> All queries for the application, abstracting the data access layer away for clear separation of concerns. 

## Features

- Viewing hiking trails
- Viewing events, for walking together
- Logging in with Supabase Auth

## Local development

Before running the application, make sure you have copied the example ENV file and installed all packages.

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

To build the application locally, run:

```shellscript
npm run build
```

To run it, run:

```shellscript
npm run start
```
