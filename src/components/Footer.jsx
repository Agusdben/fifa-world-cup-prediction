const Footer = () => {
  return (
    <footer className='flex flex-col gap-2 items-center'>
      <section>
        <p>
          <span>Created by </span>
          <span className='text-rose-900 font-bold'>Agustin Di Benedetto</span>
        </p>
      </section>
      <section className='flex gap-2 [&_a:hover]:text-rose-900 [&_a]:font-bold'>
        <a
          href='https://www.linkedin.com/in/agustin-di-benedetto-7509071ba/'
          target='_blank'
          rel='noreferrer'
        >
          Linkedin
        </a>
        <span>|</span>
        <a href='https://github.com/Agusdben' target='_blank' rel='noreferrer'>
          Github
        </a>
      </section>
    </footer>
  )
}

export default Footer
