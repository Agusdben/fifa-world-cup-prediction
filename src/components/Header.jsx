import CUP from '../assets/world-cup.svg'
const Header = () => {
  return (
    <header className='flex items-center px-4 gap-2'>
      <img className='w-10' src={CUP} alt='cup of world cup' />
      <h1 className='font-bold'>World cup prediction</h1>
    </header>
  )
}

export default Header
