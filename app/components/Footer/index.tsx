'use client'
import React, { useState, useEffect } from 'react'
import { EmailIcon, InstagramIcon, YoutubeIcon } from '@/app/components/Icons'

function Footer() {
  const [today, setToday] = useState<Date>()
  useEffect(() => {
    const currentDate = new Date()
    setToday(currentDate)
  }, [])
  return (
    <div className="w-full h-32 font-quicksand pt-4  px-6 flex flex-col justify-center items-center bg-white shadow-custom">
      {/* <div className="h-[0.5px] w-[50%] bg-fade-gradiant mb-3"></div> */}
      <p className="font-semibold">
        © {today?.getFullYear()} Zeef oria. All rights reserved.
      </p>
      <div className="mt-5 w-full flex gap-3 justify-center items-center">
        <a
          href="https://www.instagram.com/zeef_oria/"
          target="_blank"
          className="hover:scale-125"
        >
          <InstagramIcon width={30} height={30} />
        </a>
        <a
          href="https://youtube.com/@zeeforia?si=g-C1rerJMBhhyuWg"
          target="_blank"
          className="hover:scale-125"
        >
          <YoutubeIcon width={30} height={30} />
        </a>

        <a
          href="mailto:art@zeeforia.com`"
          target="_blank"
          className="hover:scale-125"
        >
          <EmailIcon width={30} height={30} />
        </a>
      </div>
    </div>
  )
}

export default Footer
