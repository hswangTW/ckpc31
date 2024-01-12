import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import UserInfo from '../components/user-info'
import NavBar from '../components/nav-bar'
import AddItemModal from '../components/add-item-modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CKPC 31st Anniversary',
  description: 'Generated by create next app',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="zh-Hant-TW" className='w-full h-full'>
      <body className={`${inter.className} flex flex-col`}>
        <AddItemModal />
        <div className='flex flex-col p-8 gap-4 bg-ckpc-buff'>
          <div className='pb-2'>
            <h1 className='flex text-4xl justify-left'>建物 31 社慶 RPG</h1>
            <h2 className='flex text-xl pt-2 justify-left'>原本只是想參加社慶的我莫名得到了決定社團命運的資格？！～既然參加了就努力導正歷史～</h2>
          </div>
          <UserInfo session={session} />
        </div>
        <NavBar />
        <div className='flex flex-col p-8 gap-4 bg-ckpc-buff-verylight'>
          {children}
          <div className='flex flex-row gap-2'>
            <Link
              href='?addingItem=y'
              className='flex-grow text-center bg-ckpc-blue-light rounded-lg px-6 py-3 transition-colors hover:bg-ckpc-blue-verylight duration-100'
            >
              新增歷史碎片
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
