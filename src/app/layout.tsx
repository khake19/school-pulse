import Providers from '~/utils/provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MockProvider } from '~/app/mockProvider'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer />
          <MockProvider>{children}</MockProvider>
        </Providers>
      </body>
    </html>
  )
}
