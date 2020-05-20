import React from 'react'
import json from '../testJson/testData'
import {Item} from 'semantic-ui-react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

const Reward = ({x, y, deleteReward}) => {

  const [{ isDragging }, drag] = useDrag({
    item: { 
            type: ItemTypes["Reward"+(y+1)],
            pos: [x,y]
          },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <Item>
        <Item.Content>
        <div onClick={()=>deleteReward(x,y)} hidden={x===0}>X</div>
          <Item.Header>{"Reward "+ (y+1) }</Item.Header>
          <Item.Description>
          </Item.Description>
        </Item.Content>
      </Item>
    </div>
  )
}

export default Reward;