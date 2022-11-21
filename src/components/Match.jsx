import { useState } from 'react'
import InputCheckbox from './InputCheckbox'
import TeamFlagImage from './TeamFlagImage'

const Match = ({
  match,
  matchIndex,
  setResult,
  firstChecked = false,
  secondChecked = false
}) => {
  const [checked, setChecked] = useState({
    first: firstChecked,
    second: secondChecked
  })

  const onChangeFirst = () => {
    const isChecked = !checked.first
    setChecked({ first: isChecked, second: false })
    setResult({
      index: matchIndex,
      team: isChecked ? match[0] : undefined
    })
  }

  const onChangeSecond = () => {
    const isChecked = !checked.second
    setChecked({ second: isChecked, first: false })
    setResult({
      index: matchIndex,
      team: isChecked ? match[1] : undefined
    })
  }

  return (
    <div className='rounded-md p-2 flex flex-col gap-1 bg-gradient-to-r from-rose-700 to-rose-900 w-60 font-bold shadow-lg shadow-black'>
      <div className='flex bg-black bg-opacity-40 p-2'>
        <TeamFlagImage
          src={match[0].flag}
          alt={`${match[0].name} flag`}
          kind='small'
        />
        <InputCheckbox
          label={match[0].name}
          checked={checked.first}
          onChange={onChangeFirst}
        />
      </div>
      <p className='text-center'>VS.</p>
      <div className='flex bg-black bg-opacity-40 p-2'>
        <TeamFlagImage
          src={match[1].flag}
          alt={`${match[1].name} flag`}
          kind='small'
        />
        <InputCheckbox
          label={match[1].name}
          checked={checked.second}
          onChange={onChangeSecond}
        />
      </div>
    </div>
  )
}

export default Match
