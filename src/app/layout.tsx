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
  description: "a Software Engineer focused on Frontend.",
  openGraph: {
    type: "website",
    url: "https://anshori.co",
    title: {
      default: "Achmad Anshori – Software Engineer, Frontend.",
      template: "%s – Achmad Anshori",
    },
    description: "a Software Engineer focused on Frontend.",
    siteName: "Achmad Anshori",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Achmad Anshori – Software Engineer, Frontend.",
      template: "%s – Achmad Anshori",
    },
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
