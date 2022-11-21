import Portal from '../Portal'

const Modal = ({ children, handleModal: onClose, open, title = '' }) => {
  return (
    <Portal elementID='modal'>
      {open && (
        <div className='fixed text-white top-0 left-0 w-screen h-screen grid place-content-center'>
          <div className='min-w-[300px] m-auto max-h-[75%] bg-white relative z-10 overflow-y-auto'>
            <header className='sticky top-0 bg-gradient-to-r font-bold from-rose-700 to-rose-900 flex justify-between items-center px-4 py-2 capitalize'>
              <h2 className='text-xl'>{title}</h2>
              <button type='button' className='' onClick={onClose}>
                <span className='gird place-content-center'>X</span>
              </button>
            </header>
            <div className='px-4 py-2 overflow-auto'>{children}</div>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='absolute cursor-default top-0 left-0 w-screen h-screen bg-black opacity-60'
          />
        </div>
      )}
    </Portal>
  )
}

export default Modal
