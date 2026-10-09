import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { invitationConfig } from "@/lib/invitation-config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${invitationConfig.company.name} Grand Opening Invitation`,
  description: "A premium animated invitation to the grand opening and ribbon cutting ceremony.",
  openGraph: {
    title: `${invitationConfig.company.name} Grand Opening`,
    description: "You are cordially invited to celebrate the opening of our new office.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${invitationConfig.company.name} Grand Opening`,
    description: "You are cordially invited to celebrate the opening of our new office.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
