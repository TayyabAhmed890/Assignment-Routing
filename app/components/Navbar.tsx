import Link from "next/link"
import React from "react"

export default function Navbar(){
  return(
  <>
    <ul className="flex gap-5 px-6 py-5">
      <li className=" hover:text-cyan-500"><Link href="/">Home</Link></li>
      <li className=" hover:text-cyan-500"><Link href="">About</Link></li>
      <li className=" hover:text-cyan-500"><Link href="/country">Countries</Link></li>
    </ul>
  </>
  )
}