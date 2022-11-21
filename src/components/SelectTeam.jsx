import TeamOption from './TeamOption'

const SelectTeam = ({
  teams,
  classification,
  onChange,
  group,
  teamsSelected
}) => {
  const handleOnChange = e => {
    const [team] = teams.filter(team => team.name === e.target.value)
    onChange({ team, group })
  }

  return (
    <select
      name='team-selec'
      className='flex-1 bg-transparent border-b-2  text-white font-bold focus:outline-none '
      onChange={handleOnChange}
    >
      <option value='default' disabled selected>
        {classification} position
      </option>
      {teams.map((team, i) => {
        return (
          <TeamOption
            key={team.name}
            team={team}
            group={group}
            selected={teamsSelected[i]}
          />
        )
      })}
    </select>
  )
}

export default SelectTeam
