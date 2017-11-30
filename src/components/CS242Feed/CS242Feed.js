import React, { Component } from 'react';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import SurveyForm from '../SurveyForm/SurveyForm';
import InstructorResponse from '../InstructorResponse/InstructorResponse';

import './CS242Feed.css';
import src from '../FeedPage/preview.png';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const classData = ['My grader has not completed grading Assignment1.0 yet',
                   'Is there a quiz today?',
                   'Is it just me or this course is getting too difficult?'];

const GridLayout = () => (
  <Grid columns={2} verticalAlign='middle' container stackable >
    <Grid.Row>
      <Grid.Column width={8}>
            <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'>Classes</Header>
            </Grid.Row>
            <Grid.Row>
              <a href="http://localhost:3000/CS465feed">
                <Button color="blue">CS 465</Button>
              </a>
              <a href="http://localhost:3000/CS498feed">
                <Button color="blue">CS 498</Button>
              </a>
              <a href="http://localhost:3000/CS357feed">
                <Button color="blue">CS 357</Button>
              </a>
              <a href="http://localhost:3000/CS242feed">
                <Button color="green">CS 242</Button>
              </a>
            </Grid.Row>
             <Grid.Row>
                <ClassDetails/>
            </Grid.Row>
            <Grid.Row >
                 <ThreadList/>
            </Grid.Row>
            <Grid.Row floated="right">
                 <ClassDetailsFeedback/>
            </Grid.Row>
            </Grid>
        </Grid.Column>
    <Grid.Column width={8} >
       <ImageExampleImage/>
    </Grid.Column>
    </Grid.Row>
    
  </Grid>
)

const ImageExampleImage = () => (
  <Image src={src} size='massive' />
)

class ClassDetails extends Component {
  render() {
    return(
      <div>
        <SurveyForm class="CS 242"/>
      </div>)
  }
}

class ClassDetailsFeedback extends Component {
  render() {
    return(
      <div>
        <FeedbackForm class="CS 242"/>
      </div>)
  }
}

class ParentProps extends Component {

  constructor() {
    super();
    var num_votes = Math.floor(Math.random()*100)+1;
    var resolve = Math.random() >= 0.5;
    this.state = {votes: num_votes, resolved: resolve}
  }

  render() {
    return(
      <div>
        <VoteButton votes={this.state.votes} />
        <RangeLabel votes={this.state.votes} resolved={this.state.resolved} />
      </div>
      );
  }
}

const questions =  classData.map( (item, i) =>{
            return(
                <List.Item key={i} >
                    <Grid columns={2}>
                        <Grid.Column width={11}>
                      <List.Content>
                        <List.Header as='a'>{item}</List.Header>
                      </List.Content>
                        </Grid.Column>

                      <Grid.Column width={5}>
                      <List.Content floated='right' >
                          <ParentProps>
                          </ParentProps>
                      </List.Content>
                      </Grid.Column>
                    </Grid>
                    </List.Item>
            );
        } );

const ThreadList = () => (
  <List divided verticalAlign='middle' size='huge' style={{height:"350px",overflowY:"auto",overflowXx:"hidden"}} >
        {questions}
    </List>
)

class FeedPage extends Component {
   
  render() {
    return (
        <GridLayout/>
    );
  }
}


class RangeLabel extends Component {

  constructor(props) {
    super();
    if (props.resolved) {
      this.state = {color: 'rgba(0,255,0,1)', resolved: true}
    }
    else {
      var colorWeight = props.votes*0.01
      this.state = {color: 'rgba(255,0,0,' + colorWeight + ')', resolved: false}
    }
  }

  render(props) {
      if (this.state.resolved) {
        return (<InstructorResponse color={this.state.color} />);
      }
      else {
        return (<Button style={{backgroundColor: this.state.color}}>
      </Button>);
      }
  }
}


class VoteButton extends Button {

  constructor(props) {
    super();
    this.state = {color: '#e0e1e2', active: false, votes: props.votes}
    this.onClick.bind(this)
  }

  onClick() {
    if (!this.state.active) {
      this.setState({ color: 'green'})
      var update_votes = parseInt(this.state.votes) + 1
      this.setState({votes: update_votes})
      this.setState({ active: !this.state.active})
    }
    else {
      this.setState({ color: '#e0e1e2'})
      var update_votes = parseInt(this.state.votes) - 1
      this.setState({votes: update_votes})
      this.setState({ active: !this.state.active})
    }
    
  }

  render() {
    return(
      <Button style={{backgroundColor:this.state.color}} onClick={() => this.onClick()}>
        <Icon name='arrow up'/> {this.state.votes}
      </Button>
    );
  }
}

export default FeedPage;