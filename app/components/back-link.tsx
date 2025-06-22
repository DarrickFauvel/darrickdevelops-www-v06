"use client"

import { useRouter } from "next/navigation"

export default function BackLink({ children }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <a
      href="/#portfolio"
      className="text-blue-500 hover:underline"
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
