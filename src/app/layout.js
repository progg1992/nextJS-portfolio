import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({ 
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata = {
  title: "Pierce Rogg | Developer",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background text-foreground')}>
		{children}
    <FireFliesBackground />
    <Sound />
	  </body>
    </html>
  );
}
