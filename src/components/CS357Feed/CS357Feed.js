import React, { Component } from 'react';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import { Card, Icon, Image, Label, Popup } from 'semantic-ui-react'
import SurveyForm from '../SurveyForm/SurveyForm';
import InstructorResponse from '../InstructorResponse/InstructorResponse';

import './CS357Feed.css';
import src from '../FeedPage/preview.png';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const classData = ['Grade not show up on UIUC Enterprise',
                   'Make the Practice Final similar to the in-class flows',
                   'Homework 9 disappeared',
                   'Release Format of Final Exam',
                   'Midterm grades are wrong!'];

const GridLayout = () => (
  <Grid columns={2} verticalAlign='middle' container stackable >
    <Grid.Row >
      <Grid.Column width={9}>
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
                <Button color="green">CS 357</Button>
              </a>
              <a href="http://localhost:3000/CS242feed">
                <Button color="blue">CS 242</Button>
              </a>
            </Grid.Row>
             <Grid.Row>
                <SurveyForm/>
            </Grid.Row>
            <Grid.Row >
                 <ThreadList/>
            </Grid.Row>
            <Grid.Row floated="right">
                 <FeedbackForm/>
            </Grid.Row>
            </Grid>
        </Grid.Column>
    <Grid.Column width={1}>
    </Grid.Column>
    <Grid.Column width={6} stretched >
        <Grid>
        <Grid.Row centered>
                <Label as='a' color='red' >Unresolved</Label>    
                <Label as='a' color='green' >Resolved</Label>    
        </Grid.Row>
        <Grid.Row>
       <EmbedExampleIframe/>
        </Grid.Row>
        </Grid>    </Grid.Column>
    </Grid.Row>
    
  </Grid>
)

const EmbedExampleIframe = () => (
  <iframe
    className = 'ch'
    style={{overflow: "hidden"}}
    src='http://localhost:3000/graph.html'
  />
)


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
  <List divided verticalAlign='middle' size='huge' style={{height:"350px",overflowY:"auto",overflowX:"hidden"}} >
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
        return ( <Popup
              trigger={
                <Button style={{backgroundColor: this.state.color}}>
                </Button>}
              content='This would be covered in the next lecture'
              size='huge'
            />);
      }
      else {
        return ( <Popup
              trigger={
                <Button style={{backgroundColor: this.state.color}}>
                </Button>}
              content='Unresolved'
              size='huge'
            />);
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
      <Button toggle active={this.state.active} onClick={() => this.onClick()}>
        <Icon name='arrow up'/> {this.state.votes}
      </Button>
    );
  }
}

export default FeedPage;
