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
    //Collector function converts the Dnd states in the monitor into props, which the React components can use.
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })


  return (
    <div
      //Referencing the Reward Component DOM with the drag function attaches the DOM elements to the React Dnd (in this case, allowing React DnD to directly affect the DOM when we drag the object)
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 12,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <Item style={{padding: '0 10px'}}>
        <div onClick={()=>deleteReward(x,y)} hidden={x===0} style={{color:'red', textAlign: 'right'}}>X</div>
        <Item.Image size='small' style={{width: '133px'}} src={'/images/'+json[y].pic} />
        <Item.Content>
          <Item.Header>
            {json[y].name + " - " + json[y].cost}
          </Item.Header>
          <Item.Description>
          </Item.Description>
        </Item.Content>
      </Item>
    </div>
  )
}

export default Reward;