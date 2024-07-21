import React from 'react'

import './Backdrop.css'

function Backdrop({ transparent }) {
  return (
    <div className={transparent ? 'backdrop backdrop-transparent' : 'backdrop'}></div>
  )
}

export default Backdrop