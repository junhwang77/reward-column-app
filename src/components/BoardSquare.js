import React, { useState, useCallback } from 'react'
import Square from './Square'
import { canMoveReward, moveReward } from './Move'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'
import Overlay from './Overlay'

const BoardSquare = ({ x, y, children, lastDroppedPosition, onDrop }) => {

  let start = x === 0

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes["Reward" +(y+1)],
    canDrop: () => canMoveReward(x,y,y),
    drop: (item) => {
      moveReward(x, y, item.pos)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })


  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
    }}
    >      
      <Square x={x} y={y}>{children}</Square>
        {isOver && !canDrop && !start && <Overlay color="red"/>}
        {isOver && canDrop && !start && <Overlay color="green"/>}
        {!isOver && canDrop && !start && <Overlay color="yellow"/>}
      </div>
  
  )
}

export default BoardSquare