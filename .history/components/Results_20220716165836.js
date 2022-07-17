import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div>
      {results.map(result=>(

        <Card result={result}  />
        // <h1 className=''>{result.title} </h1>
      ))}
    </div>
  )
}
