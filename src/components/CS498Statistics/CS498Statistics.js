import React from 'react';
import ReactDOM from 'react-dom';
import {Pie, Chart} from 'react-chartjs-2';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import './CS498Statistics.css';

const GridLayout = () => (
  <Grid columns={3} verticalAlign='middle' container stackable >
	<Grid.Row>
              <a href="http://localhost:3000/statistics">
                <Button color="blue">CS 465</Button>
              </a>
              <a href="http://localhost:3000/CS498statistics">
                <Button color="green">CS 498</Button>
              </a>
              <a href="http://localhost:3000/CS357statistics">
                <Button color="blue">CS 357</Button>
              </a>
              <a href="http://localhost:3000/CS242statistics">
                <Button color="blue">CS 242</Button>
              </a>
            </Grid.Row>
    <Grid.Row>
		<Grid.Column width={5}>
                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'> </Header>

            </Grid.Row>
			</Grid>
		</Grid.Column>
		<Grid.Column width={5}>
                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'>CS 498</Header>

            </Grid.Row>
			</Grid>
		</Grid.Column>
		<Grid.Column width={5}>
                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'> </Header>

            </Grid.Row>
			</Grid>
		</Grid.Column>
	</Grid.Row>
	<Grid.Row>
      <Grid.Column width={5}>
                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'>Midterm</Header>

            </Grid.Row>
			<Grid.Row>
				<Header size='medium'>Difficulty (Opinion) </Header>
			</Grid.Row>
			<Grid.Row>
				<Pie data = {oneData}/>
			</Grid.Row>
			<Grid.Row>
				<Header size = 'large'>Midterm</Header>
			</Grid.Row>
			<Grid.Row>
				<Header size='medium'>Results</Header>
			</Grid.Row>
			<Grid.Row>
				<Pie data = {fourData}/>
			</Grid.Row>
        </Grid>
        </Grid.Column>
    <Grid.Column width={5} >
	                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
		<Grid.Row>
                    <Header size='huge'>Homeworks</Header>
        </Grid.Row>
		<Grid.Row>
				<Header size='medium'>Difficulty (Opinion) </Header>
			</Grid.Row>
		<Grid.Row>
				<Pie data = {twoData}/>
			</Grid.Row>
			<Grid.Row>
				<Header size = 'large'>Homeworks</Header>
			</Grid.Row>
			<Grid.Row>
				<Header size='medium'>Results</Header>
			</Grid.Row>
			<Grid.Row>
				<Pie data = {fiveData}/>
			</Grid.Row>
		</Grid>
    </Grid.Column>
	
	<Grid.Column width={5} >
	                  <Grid columns={1} textAlign='center' verticalAlign='middle'  >
		<Grid.Row>
                    <Header size='huge'>Discussion</Header>
        </Grid.Row>
		<Grid.Row>
				<Header size='medium'>Usefulness (Opinion) </Header>
			</Grid.Row>
		<Grid.Row>
				<Pie data = {threeData}/>
			</Grid.Row>
			<Grid.Row>
				<Header size='large'>Lecture</Header>
			</Grid.Row>
			<Grid.Row>
				<Header size='medium'>Usefulness (Opinion) </Header>
			</Grid.Row>
			<Grid.Row>
				<Pie data = {sixData}/>
			</Grid.Row>
		        </Grid>
    </Grid.Column>

    </Grid.Row>
        
  </Grid>
)

const oneData = {
	labels: [
		'Very Easy',
		'Easy',
		'Medium',
		'Hard',
		'Very Hard'
	],
	datasets: [{
		data: [27, 19, 19, 31, 31],
		backgroundColor: [
		'#E38627',
		'#97101E',
		'#18EFEA',
		'#3D33FF',
		'#7AAE75'
		]
	}]
};

const twoData = {
	labels: [
		'Very Easy',
		'Easy',
		'Medium',
		'Hard',
		'Very Hard'
	],
	datasets: [{
		data: [31, 37, 28, 24, 28],
		backgroundColor: [
		'#E38627',
		'#97101E',
		'#18EFEA',
		'#3D33FF',
		'#7AAE75'
		]
	}]
};

const threeData = {
	labels: [
		'Not Useful',
		'Not too Useful',
		'Useful',
		'Very Useful'
		],
	datasets: [{
		data: [17, 20, 18, 20],
		backgroundColor: [
		'#97101E',
		'#18EFEA',
		'#3D33FF',
		'#7AAE75'
		]
	}]
};

const fourData = {
	labels: [
		'A',
		'B',
		'C',
		'D',
		'F'
	],
	datasets: [{
		data: [30, 20, 26, 30, 15],
		backgroundColor: [
		'#E38627',
		'#97101E',
		'#18EFEA',
		'#3D33FF',
		'#7AAE75'
		]
	}]
};

const fiveData = {
	labels: [
		'A',
		'B',
		'C',
		'D',
		'F'
	],
	datasets: [{
		data: [34, 30, 29, 25, 25],
		backgroundColor: [
		'#E38627',
		'#97101E',
		'#18EFEA',
		'#3D33FF',
		'#7AAE75'
		]
	}]
};

const sixData = {
	labels: [
		'Not Useful',
		'Not too Useful',
		'Useful',
		'Very Useful'
		],
	datasets: [{
		data: [27, 30, 30, 40],
		backgroundColor: [
		'#97101E',
		'#18EFEA',
		'#3D33FF',
		'#7AAE75'
		]
	}]
};

class StatisticsPage extends React.Component {

  render() {
    return (
      <div>
        <GridLayout/>
      </div>
    );
  }
};

export default StatisticsPage;
