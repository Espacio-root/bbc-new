import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const poppins = Poppins(
  {
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ["400", "500", "600", "700", "800", "900"]
  })

export const metadata = {
  title: 'Abstract',
  description: 'Coded By Abdullah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} min-h-screen`}>
        <main className='flex flex-col font-poppins'>
          <Navbar />
            <section className='flex-1'>
              {children}
            </section>
          <Footer />
        </main>
      </body>
    </html>
  )
}
