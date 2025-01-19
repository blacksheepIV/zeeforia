'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { navbarItems } from './constants'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

function Navbar() {
  const router = useRouter()
  const pathName = usePathname()
  const [selectedIndex, setSelectedindex] = useState(0)

  useEffect(() => {
    const currentIndex = navbarItems.findIndex(
      navItem => navItem.path === pathName,
    )
    if (currentIndex !== -1) setSelectedindex(currentIndex)
  }, [pathName])

  const navigateTo = (index: number, path: string) => {
    setSelectedindex(index)
    router.push(path)
  }
  return (
    <nav>
      <div className="fixed top-0 left-0 h-16 z-10 bg-white bg-opacity-0 flex w-full justify-between items-center mx-auto pr-4 pl-2 pb-2">
        <Link href={'/'} className="hover:animate-rotate-y-180 pt-2">
          <Image src="/logo.png" alt="Logo" width={50} height={40} />
        </Link>
        <div className="menu">
          <ul className="flex flex-row gap-6">
            {navbarItems.map((navItem, index) => (
              <div
                onClick={() => navigateTo(index, navItem.path)}
                key={`${index}-${navItem.title}`}
                className={clsx(
                  'font-montserrat text-sm font-medium pb-2 cursor-pointer',
                  {
                    'text-delft_blue-400 border-b-2 border-b-delft_blue-400':
                      selectedIndex === index,
                    'text-white hover:text-delft_blue-400':
                      selectedIndex !== index,
                  },
                )}
              >
                {navItem.title}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
