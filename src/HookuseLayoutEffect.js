import React, { useEffect, useLayoutEffect } from 'react'

const HookuseLayoutEffect = () => {
    useEffect(()=>console.log('4 - Inside useEffect'),[])

    useLayoutEffect(()=>console.log('3- This will run even before useEffect'),[])

    console.log('1 - Inside JS')
  return (
    <div>
        <h1>Hook - useLayoutEffect</h1>
        {console.log('2 - Inside JSX')}
    </div>
  )
}

export default HookuseLayoutEffect