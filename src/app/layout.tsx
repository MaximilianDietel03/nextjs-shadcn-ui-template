import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import '@/styles/globals.css'

// https://beta.nextjs.org/docs/optimizing/fonts#with-tailwind-css
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
