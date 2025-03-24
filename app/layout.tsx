import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCY ELECTRICALS",
  description:
    "Your trusted supplier of electrical components in Nakuru, Kenya. We offer a wide range of high-quality products at competitive prices.",
  generator: "William.dev",
  icons: {
    icon: "/favicon.ico",
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
