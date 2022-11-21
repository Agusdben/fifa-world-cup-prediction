import React from 'react'

const InputCheckbox = ({ label, onChange, checked }) => {
  return (
    <div className='flex-1 flex justify-between gap-4 px-2'>
      <label htmlFor={label}>{label}</label>
      <input
        className='w-5 aspect-square accent-rose-900'
        name={label}
        type='checkbox'
        onChange={onChange}
        checked={checked}
      />
    </div>
  )
}

export default InputCheckbox
