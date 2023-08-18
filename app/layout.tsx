
import './globals.css'
import type { Metadata } from 'next'
import { Chivo } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ActiveSectionProvider } from '@/context/ActiveSection'

const chivo = Chivo({ 
  weight: ['200', '400', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keren Elizabeth | Developer Portfolio',
  description: 'Built with Next.js, TypeScript and TailwindCSS by Keren Elizabeth, 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`m-0 p-0 ${chivo.className}`}>
        <ActiveSectionProvider>
          <Header/>
          {children}
          <Footer/>
        </ActiveSectionProvider>      
        <div className="texture"></div>
      </body>

    </html>
  )
}
