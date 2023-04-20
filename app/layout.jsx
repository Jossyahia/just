import './globals.css'

export const metadata = {
  title: 'Just Food App',
  description: 'Food only location  app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
