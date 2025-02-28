import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secret Love Message | Encrypted Letters for Your Special One",
  description: "Send a secret love message with encryption. Secure and private love letters created by Rohit Chauhan.",
  keywords: "secret message, love letter, encrypted love message, private messaging, send secret note, secure love letter",
  authors: [{ name: "Rohit Chauhan", url: "https://rohit-coder.vercel.app/" }],
  creator: "Rohit Chauhan",
  openGraph: {
    title: "Secret Love Message | Send Encrypted Letters",
    description: "Create and send encrypted love messages that only your special one can unlock.",
    url: "https://rohit-coder.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://rohit-coder.vercel.app/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Secret Love Message Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Love Message | Encrypted & Private Letters",
    description: "Send a heartfelt message with encryption and privacy. Only your special one can unlock it!",
    images: ["https://rohit-coder.vercel.app/"], // Add your Twitter preview image
    creator: "@yourTwitterHandle",
  },
  metadataBase: new URL("https://rohit-coder.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rohit-coder.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
