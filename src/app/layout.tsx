import type { Metadata } from "next";
import { Inter as FontSans, Lora as FontSerif } from 'next/font/google';
import './globals.css'
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";
import { ConstellationBackground } from "@/components/constellation-background";
import { ThemeProvider } from "next-themes";
import { TerminalDialog } from "@/components/terminal-dialog";
import React from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif"
})


export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), 
  title: {
    default: "Siddhartha Sharma's Digital Palace",
    template: `%s | Siddhartha Sharma`,
  },
  description: "Ancient Software. Modern Solutions. A digital home exploring technology, philosophy, and the art of craft.",
  openGraph: {
    title: "Siddhartha Sharma's Digital Palace",
    description: "Ancient Software. Modern Solutions.",
    url: 'https://your-domain.com',
    siteName: 'Siddhartha Sharma',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: Readonly<({children: React.ReactNode})>){
  return(
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
         "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div >
            <Header />
          <ConstellationBackground />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <CommandMenu />
          <TerminalDialog />
        </ThemeProvider>
      </body>
    </html>
  )
}