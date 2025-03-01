import React from 'react'

function Contact() {
  return (
    <section id="contact" className="container mx-auto pt-12 lg:px-0 px-4">
      <div className="flex flex-col gap">
        <h2 className="font-montserrat font-semibold text-xl text-delft_blue mb-6 tracking-widest">
          Get in
          <span className="text-orange-500 tracking-widest"> Touch</span>
        </h2>
        <p className="text-base font-normal mb-6 font-quicksand">
          Zeefora loves connecting with art enthusiasts, collaborators, and
          anyone inspired by their work. Whether you’re interested in
          commissioning a piece, discussing an exhibition, or simply sharing
          your thoughts, they’re eager to hear from you. To reach out, please
          use the contact form below or email directly at{' '}
          <a href="mailto:art@zeeforia.com" className="text-steel_blue-500">
            art@zeeforia.com
          </a>
          . They aim to respond within 48 hours. Thank you for your interest in
          Zeefora&apos;s creations—your support and inquiries mean the world!
        </p>
      </div>
    </section>
  )
}

export default Contact
