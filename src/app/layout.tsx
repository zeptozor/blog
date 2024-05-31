import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'zeptozor',
    description: 'Testing the new domain',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
