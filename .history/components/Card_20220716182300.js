import React from 'react'
import Image from 'next/dist/client/image'
import Results from './Results'

export default function Card({result}) {
  return (
    <div>
      <Image 
        src={result.id}
        width=""
        height={} />
    </div>
  )
}
 