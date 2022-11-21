import React from 'react'

const TeamFlagImage = ({ src, alt, kind = 'small' }) => {
  const KINDS = {
    small: 'w-6'
  }
  return (
    <div className={`${KINDS[kind]}`}>
      <img
        className='w-full h-full object-contain overflow-hidden'
        src={src}
        alt={alt}
        loading='lazy'
      />
    </div>
  )
}

export default TeamFlagImage
