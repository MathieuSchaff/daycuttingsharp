import './globals.css'
import type { Metadata } from 'next'
import { syne, inter } from "../fonts"
export const metadata: Metadata = {
  title: 'Daycuttingsharp - Affûteur, basé à Sète, de couteaux, ciseaux et outils de jardinage de qualité',
  description: 'Daycuttingsharp est une entreprise d&apos;affûtage de couteaux qui propose des services d&apos;affûtage de couteaux, de ciseaux et d&apos;outils de jardinage de qualité.Nous offrons un service d&apos;affûtage à domicile et en entreprise, et nous proposons des prix abordables.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body >
        {children}
      </body>
    </html>
  )
}
