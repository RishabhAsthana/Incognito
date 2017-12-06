import React, { Component } from 'react';
import { Icon, Button, Checkbox, Form, Container, Radio, Grid, Modal, Image, Header, Segment, TextArea, Input, Label } from 'semantic-ui-react'
import logo from './logo.svg';
import './FeedbackForm.css';
import SurveyForm from '../SurveyForm/SurveyForm';


class FeedbackForm extends Component {
    
  constructor(props){
      super();
      this.state = {class: props.class, modalOpen: false};
      this.handleOpen.bind(this);
  }
    
  handleOpen = () => this.setState({ modalOpen: true });

  submitForm(){
      this.setState({modalOpen:false });
  }

    render() {
    return (
        <Modal trigger={ 
            <Button positive onClick={this.handleOpen}>
                Add Feedback
            </Button>
            } 
            size='large'
            dimmer='blurring'
            closeOnRootNodeClick={false}
            open = {this.state.modalOpen}
            >
    
    <Modal.Header>Feedback Form</Modal.Header>
    <Modal.Content >
     
      <Modal.Description>
        <Header>{this.state.class}</Header>
       <Form>
        <Grid columns={1} container centered>
            
        <Grid.Row stretched>
            <h4 style={{padding:'1em',paddingTop:'0.6em'}}>Summary:</h4>
            <Form.Field id='form-input-control-first-name' width={14} control={Input} placeholder='Summary' />
        </Grid.Row>
        
        <Grid.Row stretched>  
            <h4 style={{padding:'1em',paddingTop:'0.6em'}}>Details:</h4>
            <Form.Field id='form-textarea-control-opinion' width={14} control={TextArea} placeholder='Details' />
        </Grid.Row>

        </Grid>
            <Grid>
                <Grid.Column>
                    <Button  primary floated='right' type='submit' onClick={() => this.submitForm()}>Submit</Button>
                </Grid.Column>
            </Grid>
        </Form>        
      </Modal.Description>
    </Modal.Content>
  </Modal>     
    );
  }
}

export default FeedbackForm;
