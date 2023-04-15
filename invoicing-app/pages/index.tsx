import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'material-icons/iconfont/material-icons.css'
import Nav from '@/Components/nav/Nav'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative flex flex-col min-h-screen h-screen bg-slate-600'>
      <Nav />
    </div>
  )
}
