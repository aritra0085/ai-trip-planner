import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "./_components/Header";               // import Header
import { ClerkProvider } from "@clerk/nextjs";

import { ConvexClientProvider } from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ConvexClientProvider>
            {/*  Header shows once for every page */}
            <Header />
            <Provider>
              {children}
            </Provider>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
