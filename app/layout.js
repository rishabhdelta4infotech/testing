export const metadata = {
  title: 'Dummy AI Bot',
  description: 'Testing Chatbase integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
