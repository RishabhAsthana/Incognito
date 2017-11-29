import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Radio, Grid, Modal, Image, Header, Segment, TextArea, Input } from 'semantic-ui-react'
import logo from './logo.svg';
import './FeedbackForm.css';
import SurveyForm from '../SurveyForm/SurveyForm';

class FeedbackForm extends Component {
    
  constructor(){
      super();
  }
    
  submitForm(){
     let tmp = this.state.arr;
      for(var it in tmp)
          tmp[it].isActive = false;
      this.setState({ arr: tmp, difficulty:'1', instruction:'1', resources:'1' });

  }

    render() {
      
    return (
<Modal trigger={<Button>Show Modal</Button>} size='large' closeIcon closeOnRootNodeClick={false} >
    <Modal.Header>Feedback Form</Modal.Header>
    <Modal.Content >
     
      <Modal.Description>
        <Header>CS 357</Header>
       <Form>
        <Grid columns={1} container centered>
                        <Grid.Row stretched>

        <Form.Field id='form-input-control-first-name' width={14} control={Input} label='Summary' placeholder='Summary' />
            </Grid.Row>
            <Grid.Row stretched>  

        <Form.Field id='form-textarea-control-opinion' width={14} control={TextArea} label='Details' placeholder='Details' />
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
