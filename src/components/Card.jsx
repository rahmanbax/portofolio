import React from 'react'

const Card = ({img, title, paragraph}) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 bg-[#1B1B1B] w-full rounded-xl  '>
      <img src={img} className="h-12 lg:h-16" />
      <div className='mt-4'>
        <h3 className='font-semibold text-base lg:text-xl'>{title}</h3>
        <p className='mt-1 lg:mt-2 text-xs text-[#C6C6C6] lg:text-base'>{paragraph}</p>
      </div>
    </div>
  )
}

export default Card