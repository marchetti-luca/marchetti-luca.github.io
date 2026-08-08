import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luca Marchetti — Quantum Gravity & Cosmology",
  description:
    "Luca Marchetti is a theoretical physicist working on quantum gravity, relational physics, group field theory, and cosmology.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
