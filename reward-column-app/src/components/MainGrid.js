import React from 'react'
import {Grid, Button, Icon} from 'semantic-ui-react'
import CategoryBoard from './CategoryBoard'
import {undo, redo, saveProgress} from './Move'

const mileGreen = {
  color: '#11AF42'
}

const MainGrid = (props) => {
  return(
  <Grid>
    <Grid.Row style={{margin:'5px 0', borderBottom: '1px solid lightgrey'}}>
      <Grid.Column width={3} textAlign={"right"}>
        <Button animated='vertical' onClick={()=>saveProgress()}>
          <Button.Content hidden>Save</Button.Content>
          <Button.Content visible>
            <Icon size='large' name='save outline' />
          </Button.Content>
        </Button>
      </Grid.Column>
      <Grid.Column width={10} textAlign={"center"}>
        <h1 style={mileGreen}>Rewards Dashboard</h1>
      </Grid.Column>
      <Grid.Column width={3}>
        <Button animated='vertical' onClick={()=>undo()}>
          <Button.Content hidden>Undo</Button.Content>
          <Button.Content visible>
            <Icon size='large' name='arrow alternate circle left outline' />
          </Button.Content>
        </Button>
        <Button animated='vertical' onClick={()=>redo()}>
          <Button.Content hidden>Redo</Button.Content>
          <Button.Content visible>
            <Icon size='large' name='arrow alternate circle right outline' />
          </Button.Content>
        </Button>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={6} textAlign={"center"} style={{padding: 0}}>
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
    <Grid.Row style={{height: '86vh', paddingTop: 0}} textAlign={'center'}>
      <Grid.Column width={16}>
        <CategoryBoard storedPosition={props.storedPosition} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)}

export default MainGrid;