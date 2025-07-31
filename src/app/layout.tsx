import type { Metadata } from "next";
import "./globals.css";
import { ppNeueMontreal } from "./fonts";

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
    <html lang="en" className={`h-full overflow-x-hidden ${ppNeueMontreal.variable} font-sans`}>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden bg-white">
        {children}
      </body>
    </html>
  );
}
