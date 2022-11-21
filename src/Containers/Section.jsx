const Section = ({ children }) => {
  return (
    <section className='flex flex-1 flex-col justify-between gap-4 max-w-7xl mx-auto p-6'>
      {children}
    </section>
  )
}

export default Section
