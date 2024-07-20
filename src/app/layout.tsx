import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const outfit = Outfit({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "ContentCraft || Craft your content effortlessly.",
  description:
    "ContentCraft empowers you to craft high-quality, engaging content with ease, transforming ideas into compelling narratives effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={outfit.className}>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
