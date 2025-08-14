import type { Metadata } from "next";
import {Geist, Outfit} from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
<<<<<<< HEAD
import { ConvexClientProvider } from "./ConvexClientProvider";
=======
>>>>>>> c30d145888aac97cd8a261867ca8b89f3de1e192


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
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
<<<<<<< HEAD
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
=======
          <Provider>
            {children}
          </Provider>
>>>>>>> c30d145888aac97cd8a261867ca8b89f3de1e192
        
        </body>
      </html>
    </ClerkProvider>
  );
}
