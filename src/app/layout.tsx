import type { Metadata } from "next";

import "./globals.css";
import { cn } from "../lib/utils";
import { robotoMono } from "../lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://anshori.co"),
  title: {
    default: "Achmad Anshori – Software Engineer, Frontend.",
    template: "%s – Achmad Anshori",
  },
  description:
    "Achmad Anshori's minimal resume page. Built with nextjs. Ctrl+P to print.",
  openGraph: {
    type: "website",
    url: "https://anshori.co",
    title: {
      default: "Achmad Anshori – Software Engineer, Frontend.",
      template: "%s – Achmad Anshori",
    },
    images: "/192x192.png",
    description:
      "Achmad Anshori's minimal resume page. Built with nextjs. Ctrl+P to print.",
    siteName: "Achmad Anshori' resume",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Achmad Anshori – Software Engineer, Frontend.",
      template: "%s – Achmad Anshori",
    },
    images: "/192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          robotoMono.className,
          "min-h-screen max-w-2xl mx-auto flex p-4 md:p-8 text-neutral-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
