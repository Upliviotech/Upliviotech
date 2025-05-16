export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>UpLivio Tech</title>
        <meta name="description" content="Marketing agency specializing in lead generation and digital strategies." />
      </head>
      <body>{children}</body>
    </html>
  );
}