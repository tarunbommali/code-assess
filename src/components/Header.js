import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 px-24 bg-white m-0 border-b-[1px] border-[#707070]'>
      <h1 className='text-3xl font-bold text-[#676767]'> <Link to="/">Code Assess</Link> </h1>
      <button className='flex justify-center items-center bg-[#2973ef] text-white rounded-3xl text-center px-6 py-2 text-xl font-semibold hover:bg-orange-400'>Login</button>
    </div>
  )
}
