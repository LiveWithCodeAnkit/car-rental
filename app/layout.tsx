import './globals.css'
import { ClerkProvider,SignIn } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { SignedIn } from '@clerk/nextjs/app-beta'
import { SignedOut } from '@clerk/nextjs/app-beta/client'
import NavBar from '@/components/NavBar'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LiveWithCodeAnkit',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    <html lang="en">
      <body className={inter.className}>
      <ClerkProvider>
        <SignedIn>
          <NavBar/>
         {children}
        </SignedIn>
        <SignedOut>
          <SignIn/>
        </SignedOut>
      </ClerkProvider>
        </body>
    </html>
  
  )
}
