import React from 'react'

export default function Results({results}) {
  return (
    <div>
      {results.map(result=>(
        <h1 className=''>{result.title} </h1>
      ))}
    </div>
  )
}
