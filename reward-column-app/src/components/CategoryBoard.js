import React, { useState, useCallback } from 'react'
import Reward from './Reward'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
import { deleteReward } from './Move'



const RenderSquare = (i, position, x ,y) => {
  const [lastDroppedPosition, setLastDroppedPosition] = useState(null)
  const handleDrop = useCallback((pos) => setLastDroppedPosition(pos), [])

  return (
    <div key={i} style={{ width: '16.6%', height: '20%', borderLeft: 'lightgrey 2px dashed', borderBottom: 'lightgrey 2px solid' }}>
      <BoardSquare x={x} y={y} 
        lastDroppedPosition={lastDroppedPosition}
        onDrop={handleDrop}>
        {renderReward(x, y, position)}
      </BoardSquare>
    </div>
  )
}

const renderReward = (x, y, position) => {
    if( (position[0] === x && position[1] === y) )  {
      return <Reward x={x} y={y} deleteReward={deleteReward} />
    }
}

const CategoryBoard = ({ storedPosition }) => {

  const weekdays = []
  for (let i = 0; i < 30; i++) {
      let x = i % 6
      let y = Math.floor(i / 6)
      let position = [0,0]
      //matches the position with stored positions. If matched, it renders reward component
      storedPosition.forEach(pos => {
        if(pos[0]===x && pos[1]===y){
          position = pos
        }
      });
      weekdays.push(RenderSquare(i, position, x, y))
  } 
  return (
    <DndProvider backend={Backend}>
      <div
        style={{
          width: '100%',
          height: '99%',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {weekdays}
      </div>
    </DndProvider>
    
  )
}

export default CategoryBoard;