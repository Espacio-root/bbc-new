import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Main from '../components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Main />
  </>
  )
}
