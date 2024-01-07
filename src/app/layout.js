import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import ThemeContextMain from './hooks'

const inter = Poppins({ subsets: ['latin'],weight:['300','400','500','600','700','800','900'] })

export const metadata = {
  title: 'Abhay Kumar Gupta',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextMain>
          <div className=''>
            {children}
          </div>
        </ThemeContextMain>
      </body>
    </html>
  )
}
