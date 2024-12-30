import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'O.W.L - Operations Workflow Lookout',
  description: 'An intelligent monitoring tool for GitLab CI/CD and DevSecOps ecosystem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-100 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}