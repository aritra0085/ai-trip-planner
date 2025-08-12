import type { Metadata } from "next";
import {Geist, Outfit} from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit=Outfit({subsets:['latin']})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>
          {children}
        </Provider>
      
      </body>
    </html>
  );
}
