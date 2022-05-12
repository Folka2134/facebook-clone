import React from 'react'

export const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className='flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 cursor-pointer rounded-xl active:border-b-2 active:border-blue-500 group'>
      <Icon className={`h-5 sm:h-7 text-center mx-auto text-gray-500 group-hover:text-blue-500 ${active && 'text-blue-500'}`} />
    </div>
  )
}
