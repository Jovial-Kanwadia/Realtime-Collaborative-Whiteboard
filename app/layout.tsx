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
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}


