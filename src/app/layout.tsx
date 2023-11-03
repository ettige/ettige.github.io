import './globals.css'
import { Vazirmatn } from 'next/font/google'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Vazirmatn({ subsets: ['arabic'] })

export const metadata = {
  title: 'محمد لطیفی',
  description: 'طراح و برنامه نویس وب',
  authors: [{ name: 'Mohammad Latifi' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="cupcake" lang="fa" dir='rtl'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
