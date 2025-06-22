"use client"

import { useRouter } from "next/navigation"

type BackLinkProps = {
  sectionId: string
  children: React.ReactNode
}

export default function BackLink({ sectionId, children }: BackLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.back()
  }

  return (
    <a
      href={`/#${sectionId}`}
      className="text-blue-500 hover:underline"
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
