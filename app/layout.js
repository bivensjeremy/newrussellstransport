import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { robotoFont } from './fonts'
import './globals.css'


export const metadata = {
  title: {
    default: "Russel's Transport, LLC",
    template: "%s | Russel's Transport, LLC",
  },
  description: 'Professional dispatch and trucking services based in southwest Georgia',
  url: 'https://russellstransportllc.com',
  keywords: ['Dispatching', 'Dispatch', 'Russell Transport', 'Trucking', 'Transport']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoFont.className}>
      <body className='bg-neutral-500'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
