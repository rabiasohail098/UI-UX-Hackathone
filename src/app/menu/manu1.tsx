import React from 'react'
import Link from 'next/link'
const Manu1 = () => {
  return (
    <section
    className="bg-cover bg-center h-64 flex items-center justify-center"
    style={{ backgroundImage: "url('/images/bg.png')" }}
  >
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold">Our Menu</h2>
      <p className="pt-2">
        <Link href="/" className="text-yellow-400">Home</Link> › Menu
      </p>
    </div>
  </section>
  )
}

export default Manu1