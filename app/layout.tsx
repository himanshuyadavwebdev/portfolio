import type { Metadata } from "next"
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google"
import ClientLayout from "@/components/layout/ClientLayout"
import ThemeProvider from "@/components/providers/ThemeProvider"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
})

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Himanshu Yadav | Frontend Developer Portfolio",
  description: "Frontend developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  openGraph: {
    title: "Himanshu Yadav | Frontend Developer",
    description: "Frontend developer and CSE student at IILM University, graduating 2026.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
