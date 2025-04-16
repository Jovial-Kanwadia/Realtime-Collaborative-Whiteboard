// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Collabio | Online Whiteboard",
  description: "Collaborative online whiteboard application",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="portal"></div>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}