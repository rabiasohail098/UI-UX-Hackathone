import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Bottom from "./components/bottom";
import { Great_Vibes } from "next/font/google";
import Nav from "./components/nav";
import { ClerkProvider } from  "@clerk/nextjs"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodTuck",
  description: "Q-Commerce marketplace FoodTuck website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="max-w-[1920px]">
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
          <Bottom />
        </body>
      </html>
</ClerkProvider>
  );
}
