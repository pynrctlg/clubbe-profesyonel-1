'use client' // Error components must be Client Components
 
import TitleType from '@/components/ui/TitleType'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
       <TitleType titleType="h1" addClass="font-third">
       Bir şeyler yanlış gitti
        </TitleType>
        <p className="font-secondary text-xl">
          Lütfen{" "}
          <Link href="/" title="ana sayfamızı" className="text-third underline">
            ana sayfamızı
          </Link>{" "}
          ziyaret edin
        </p>
    </div>
  )
}