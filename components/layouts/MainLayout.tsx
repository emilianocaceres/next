import React from 'react'

import styles from './MainLayout.module.css'
import Head from 'next/head'
import { NavBar } from '../NavBar'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
    <Head>
      <title>Contact - Next - Test</title>
      <meta name="about" content="About Page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavBar />

    <main className={`${styles.main} ${inter.className}`}>
        {children}
    </main>
  </div>
  )
}
