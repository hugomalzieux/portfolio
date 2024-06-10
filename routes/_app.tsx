import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html class="h-lvh">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`<hmalzieux/>`}</title>
        <link rel="stylesheet" href="/styles.css" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap');
        </style>
      </head>
      <body class="h-lvh">
        <Component />
      </body>
    </html>
  );
}
