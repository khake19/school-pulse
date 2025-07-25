import Providers from '~/utils/provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
