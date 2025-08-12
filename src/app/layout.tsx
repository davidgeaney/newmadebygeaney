import type { Metadata } from "next";
import "./globals.css";
import { ppNeueMontreal, untitledSans } from "@/app/fonts";
import { ClientProvider } from "@/components/providers/client-provider";

export const metadata: Metadata = {
  title: "Made By Geaney",
  description: "Creative studio focused on building meaningful digital experiences",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full overflow-x-hidden ${ppNeueMontreal.variable} ${untitledSans.variable}`}>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden bg-white font-untitled-sans">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
