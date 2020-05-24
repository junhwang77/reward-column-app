import React from 'react'

const Square = ({x, y, children}) => {
  return (
    <div 
      style={{
        paddingTop: x===0?'21px':0 , 
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
      }} 
    >
      {children}
    </div>
  )
}

export default Square;