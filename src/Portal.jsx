import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const el = document.createElement('div')
const Portal = ({ children, elementID }) => {
  const portalRoot = document.getElementById(elementID)

  useEffect(() => {
    portalRoot.appendChild(el)
  }, [children])

  return ReactDOM.createPortal(children, el)
}

export default Portal
