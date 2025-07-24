import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made By Geaney",
  description: "Creative studio focused on building meaningful digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden bg-white">
        {children}
      </body>
    </html>
  );
}
