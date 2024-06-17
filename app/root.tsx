import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import stylesheet from './tailwind.css?url';
import { LayoutUI } from './components/layout';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'WalkAbout' },
    { name: 'description', content: 'Welkom bij WalkAbout!' },
  ];
};

export function Layout() {
  return (
    <html lang='en' style={{ scrollbarGutter: 'stable' }}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutUI />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
