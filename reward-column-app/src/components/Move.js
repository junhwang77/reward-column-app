
//Constructor variables
let rewardPosition = [0, 0]
let observers = []
let storedPosition = [[0, 0],[0, 1],[0, 2],[0, 3],[0, 4]]
let deletedStorage = []
let history = []

let redoStorage = []
let redoHistory = []

//Re-renders the table 
const emitChange = () => {
  //console.log([...history])
  //console.log([...redoHistory])
  //console.log('storedposition',[...storedPosition])
  //console.log('deletedstorage',[...deletedStorage])


  //checks if a render exists in the observers, and if so, it updates it with latest storedPosition.
  observers.forEach((o) => o && o(storedPosition))
}

export const observe = (o) => {
  //GET our initial stored positions from Mongo DB
  if( storedPosition.length === 5){
    fetch("/positions/1", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin'
        : '*'
      }
    })
    .then(res => {
      res.json()
      .then(res => {
        storedPosition = res[0].positions
        emitChange()
      })
      .catch(err => console.log(err))
    })
    .catch(err => err);
  }
  observers.push(o)
  emitChange()
  return () => {
    //filters out the older o (previous render), and returns render with the new position
    observers = observers.filter((t) => t !== o)
  }
}

export const deleteReward = (x,y) => {
  for(let i = 0;i < storedPosition.length; i++) {
    if(storedPosition[i][0] === x && storedPosition[i][1] === y) {
      let [removed] = storedPosition.splice(i,1)
      deletedStorage.push(removed)
      rewardPosition = [x,0]

      history.push('deleted')
      emitChange()
    }
  }
}

export const undo = () => {
  if(history.length>0){
    //console.log('undo')
    let undo = history.pop();
    if (undo === 'deleted') {
      let removed = deletedStorage.pop()
      storedPosition.push(removed)
    } else if (undo === 'added'){
      let removed = storedPosition.pop()
      redoStorage.push(removed)
    } else if (undo === 'transferred') {
      let removed1 = storedPosition.pop()
      let removed2 = deletedStorage.pop()
      storedPosition.push(removed2)
      redoStorage.push(removed1) 
    }
    redoHistory.push(undo)
    emitChange();
  }
}

export const redo = () => {
  if(redoHistory.length>0){
    //console.log('redo')
    let redo = redoHistory.pop()
    if (redo === 'added') {
      let removed = redoStorage.pop()
      storedPosition.push(removed)
    } else if (redo === 'deleted') {
      let removed = storedPosition.pop()
      deletedStorage.push(removed)
    } else if (redo === 'transferred') {
      let removed1 = redoStorage.pop()
      let removed2 = storedPosition.pop()
      storedPosition.push(removed1)
      deletedStorage.push(removed2)
    }
    history.push(redo)
    emitChange();
  }
}

export const moveReward = (toX, toY, lastDroppedPosition) => {
  redoHistory = []
  let transferred
  //(lastDroppedPosition is the item's most recent position)
  //If the reward is not from its current position or the starting zone...
  if((lastDroppedPosition[0] !== toX && lastDroppedPosition[1] !== toY) || (lastDroppedPosition[0] !== 0) ){
    //Iterate through the positions, and if the position is where the reward originated from, delete that reward.
    //(When reward is moved from position other than the starting zone, it 'moves it rather than copying it)
    for(let i = 0;i < storedPosition.length; i++) {
      if(storedPosition[i][0] === lastDroppedPosition[0] && storedPosition[i][1] === lastDroppedPosition[1]) {
        let [removed] = storedPosition.splice(i,1)
        deletedStorage.push(removed)
        transferred = true;
      }
    }
  }

  rewardPosition = [toX, toY]
  storedPosition.push(rewardPosition)

  transferred ? history.push('transferred') : history.push('added')

  emitChange()
}

export const canMoveReward = (toX, toY, row) => {
  
  let stored
  //Find which positions are filled, and prevent movement to those areas
  storedPosition.forEach(pos => {
    if(pos[0] === toX && pos[1] === toY){
      stored = true
    }
  })

  const [x, y] = storedPosition[row]
  const dy = Math.abs(toY - y)
  const dx = Math.abs(toX)
  return (
    //You cannot move in y direction (dy === 0)
    //Or to the starting square (dx !== 0)
    //Or any square already occupied (stored)
    (dy === 0 && dx !== x) && !stored
  )
}


export const saveProgress = () => {
  let jsonStoredPosition = {
    id:1,
    positions:storedPosition
  }
  fetch("/positions/"+jsonStoredPosition.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin'
      : '*'
    }
  })
  .then(res => {
    res.json().then(res => {
      fetch("/positions/1", {
        method: res.length?"PATCH":"POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin'
          : '*'
        },
        body: JSON.stringify(jsonStoredPosition),
      })
      .then(res => 
        console.log(res)
      )
      .then(res => {
        alert("Progress saved.")
      })
      .catch(err => {
        console.log(err)
        alert("Error. Unable to save.")
      });
    })
    .catch(err => {
      console.log(err)
    })
  })
  .catch(err => {
    console.log(err)
  })
}
