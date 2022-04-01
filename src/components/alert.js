import React from 'react'
import './alert.css'

const alert = ({alert}) => {
  return (
    <div className="alert">
      <h3>{alert}</h3>
    </div>
  )
}

export default alert
