'use client'
import React, { useState, useEffect } from 'react'
import {
  EmailIcon,
  InstagramIcon,
  YoutubeIcon,
  BehanceIcon,
} from '@/app/components/Icons'

function Footer() {
  const [today, setToday] = useState<Date>()
  useEffect(() => {
    const currentDate = new Date()
    setToday(currentDate)
  }, [])
  return (
    <div className="w-full h-32 font-quicksand pt-2  px-6 hidden lg:flex lg:flex-col lg:justify-center lg:items-center bg-white shadow-custom">
      {/* <div className="h-[0.5px] w-[50%] bg-fade-gradiant mb-3"></div> */}

      <div className="w-full flex gap-x-2 justify-center items-center">
        <a
          href="https://www.instagram.com/zeef_oria/"
          target="_blank"
          className="hover:scale-125"
        >
          <InstagramIcon width={30} height={30} fill="#22306e" />
        </a>
        <a
          href="https://www.behance.net/zeeforia"
          target="_blank"
          className="hover:scale-125"
        >
          <BehanceIcon width={30} height={28} fill="#22306e" />
        </a>

        <a
          href="https://youtube.com/@zeeforia?si=g-C1rerJMBhhyuWg"
          target="_blank"
          className="hover:scale-125"
        >
          <YoutubeIcon width={30} height={30} fill="#22306e" />
        </a>

        <a
          href="mailto:art@zeeforia.com"
          target="_blank"
          className="hover:scale-125"
        >
          <EmailIcon width={30} height={30} fill="#22306e" />
        </a>
      </div>
      <p className="font-semibold mt-3">
        © {today?.getFullYear()} Zeef oria. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
