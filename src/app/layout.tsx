import type { Metadata } from "next";
import { Inter as FontSans, Lora as FontSerif } from 'next/font/google';
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: "Siddhartha Sharma's Digital Palace",
  description: "Ancient Software. Modern Solutions."
}

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
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}