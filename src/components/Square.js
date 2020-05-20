import React from 'react'

const Square = ({x, y, children}) => {
  return (
    <div 
      style={{ 
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100%',
      }} 
    >
      {children}
    </div>
  )
}

export default Square;