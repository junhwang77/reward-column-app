import React from 'react'
import {Grid} from 'semantic-ui-react'
import CategoryBoard from './CategoryBoard'

const MainGrid = (props) => {
  console.log(props)
  return(
  <Grid celled='internally'>
    <Grid.Row columns={6}>
      <Grid.Column>
        <h3>Rewards</h3>
      </Grid.Column>
      <Grid.Column>
        <h4>Category 1</h4>
      </Grid.Column>
      <Grid.Column>
        <h4>Category 2</h4>
      </Grid.Column>
      <Grid.Column>
        <h4>Category 3</h4>
      </Grid.Column>
      <Grid.Column>
        <h4>Category 4</h4>
      </Grid.Column>
      <Grid.Column>
        <h4>Category 5</h4>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{height: '88vh'}}>
      <Grid.Column width={16}>
        <CategoryBoard storedPosition={props.storedPosition} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)}

export default MainGrid;