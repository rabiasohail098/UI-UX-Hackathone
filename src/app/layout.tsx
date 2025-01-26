import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Bottom from "./components/bottom";
import { Great_Vibes } from '@next/font/google';
import Nav from "./components/nav";

const greatVibes = Great_Vibes({
  weight: '400', // Specify the font weight if needed
  subsets: ['latin'], // Load specific subsets (e.g., Latin, Cyrillic)
});


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "FoodTuck",
  description: "Q-Commerce marketplace FoodTuck website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-[1920px]">
      
      <body className={inter.className} >
      
        <Nav /> 
        {children}
        <Footer />
        <Bottom />
        </body>
    </html>
  );
}
 