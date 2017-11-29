import React, { Component } from 'react';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import PieChart from 'react-minimal-pie-chart';
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import './StatisticsPage.css';

const GridLayout = () => (
  <Grid columns={3} verticalAlign='middle' container stackable >
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
				<PieChartOne/>
			</Grid.Row>
			<Grid.Row>
				<Header size = 'large'>Midterm</Header>
			</Grid.Row>
			<Grid.Row>
				<Header size='medium'>Results</Header>
			</Grid.Row>
			<Grid.Row>
				<PieChartFour/>
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
				<PieChartTwo/>
			</Grid.Row>
			<Grid.Row>
				<Header size = 'large'>Homeworks</Header>
			</Grid.Row>
			<Grid.Row>
				<Header size='medium'>Results</Header>
			</Grid.Row>
			<Grid.Row>
				<PieChartFive/>
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
				<PieChartThree/>
			</Grid.Row>
			<Grid.Row>
				<Header size='large'>Lecture</Header>
			</Grid.Row>
			<Grid.Row>
				<Header size='medium'>Usefulness (Opinion) </Header>
			</Grid.Row>
			<Grid.Row>
				<PieChartSix/>
			</Grid.Row>
		        </Grid>
    </Grid.Column>

    </Grid.Row>
        
  </Grid>
)

const PieChartOne = () => (
	<PieChart
  data={[
    { value: 10, key: 1, color: '#E38627' },
    { value: 15, key: 2, color: '#97101E' },
    { value: 30, key: 3, color: '#18EFEA' },
	{ value: 10, key: 3, color: '#3D33FF' },
	{ value: 20, key: 3, color: '#7AAE75' }
  ]}
/>
)

const PieChartTwo = () => (
	<PieChart
  data={[
    { value: 40, key: 1, color: '#E38627' },
    { value: 10, key: 2, color: '#97101E' },
    { value: 17, key: 3, color: '#18EFEA' },
	{ value: 21, key: 3, color: '#3D33FF' },
	{ value: 15, key: 3, color: '#7AAE75' }
  ]}
/>
)

const PieChartThree = () => (
	<PieChart
  data={[
    { value: 30, key: 2, color: '#97101E' },
    { value: 20, key: 3, color: '#18EFEA' },
	{ value: 20, key: 3, color: '#3D33FF' },
	{ value: 20, key: 3, color: '#7AAE75' }
  ]}
/>
)

const PieChartFour = () => (
	<PieChart
  data={[
    { value: 5, key: 1, color: '#E38627' },
    { value: 30, key: 2, color: '#97101E' },
    { value: 20, key: 3, color: '#18EFEA' },
	{ value: 10, key: 3, color: '#3D33FF' },
	{ value: 15, key: 3, color: '#7AAE75' }
  ]}
/>
)

const PieChartFive = () => (
	<PieChart
  data={[
    { value: 20, key: 1, color: '#E38627' },
    { value: 25, key: 2, color: '#97101E' },
    { value: 45, key: 3, color: '#18EFEA' },
	{ value: 15, key: 3, color: '#3D33FF' },
	{ value: 10, key: 3, color: '#7AAE75' }
  ]}
/>
)

const PieChartSix = () => (
	<PieChart
  data={[
    { value: 40, key: 2, color: '#97101E' },
    { value: 10, key: 3, color: '#18EFEA' },
	{ value: 20, key: 3, color: '#3D33FF' },
	{ value: 20, key: 3, color: '#7AAE75' }
  ]}
/>
)

class StatisticsPage extends Component {
  render() {
    return (
        <GridLayout/>
    );
  }
}

export default StatisticsPage;
