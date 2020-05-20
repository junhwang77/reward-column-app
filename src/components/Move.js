/* const observe = (receive) => {
  const randPos = () => Math.floor(Math.random() * 6)
  setInterval(()=>receive([randPos(), randPos()]), 500)
}
export default observe;
 */

let rewardPosition = [0, 0]
let observers = []
let storedPosition = [[0, 0],[0, 1],[0, 2],[0, 3],[0, 4]]
let previousPosition = [0,0]

const emitChange = () => {
  observers.forEach((o) => o && o(storedPosition))
}

export const observe = (o) => {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}

export const deleteReward = (x,y) => {
  for(let i = 0;i < storedPosition.length; i++) {
    if(storedPosition[i][0] === x && storedPosition[i][1] === y) {
      storedPosition.splice(i,1)
      rewardPosition = [x,0]
      emitChange()
    }
  }
}

export const moveReward = (toX, toY, lastDroppedPosition) => {

  if((lastDroppedPosition[0] !== toX && lastDroppedPosition[1] !== toY) || (lastDroppedPosition[0] !== 0) ){
    for(let i = 0;i < storedPosition.length; i++) {
      if(storedPosition[i][0] === lastDroppedPosition[0] && storedPosition[i][1] === lastDroppedPosition[1]) {
        storedPosition.splice(i,1)
        rewardPosition = [lastDroppedPosition[0],0]
      }
    }
  }

  rewardPosition = [toX, toY]
  storedPosition.push(rewardPosition)
  emitChange()
}

export const canMoveReward = (toX, toY, row) => {
  
  let stored
  
  storedPosition.forEach(pos => {
    if(pos[0] === toX && pos[1] === toY){
      stored = true
    }
  })

  const [x, y] = storedPosition[row]
  const dy = Math.abs(toY - y)
  const dx = Math.abs(toX)
  return (
    (dy === 0 && dx !== x) && !stored
  )
}
