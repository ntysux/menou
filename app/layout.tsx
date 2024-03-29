import type { Metadata } from 'next'
import './globals.css'
import { comfortaa } from './_ui/font'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookieThemeValue = cookies().get('theme')?.value
  const darkMode = typeof cookieThemeValue === 'string' && cookieThemeValue === 'dark'

  return (
    <html lang="en" className={`${darkMode && 'dark'}`}>
      <body className={`${comfortaa.className} dark:bg-neutral-950/75`}>
        {children}
      </body>
    </html>
  )
}