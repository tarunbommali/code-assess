import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex'>
      <Link to="assessment" className='text-xl font-serif font-bold text-[#2973ef] underline'>Take demo test</Link>
    </div>
  )
}
