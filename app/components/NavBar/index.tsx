import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { navbarItems } from './constants'

function Navbar() {
  return (
    <nav>
      <div className=" fixed top-0 left-0 h-20 z-10 bg-[#eef0fb] bg-opacity-90 flex w-full justify-between align-middle mx-auto p-4 pl-2 shadow-sm ">
        <Link href={'/'} className="text-black font-bold text-4xl">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
        <div className="menu ">
          <ul className="flex flex-row gap-6">
            {navbarItems.map((navItem, index) => (
              <Link
                href={navItem.path}
                key={`${index}-${navItem.title}`}
                className="block text-black sm:text-xl font-medium rounded md:p-0 hover:text-delftBlue-400 cursor-pointer"
              >
                {navItem.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
