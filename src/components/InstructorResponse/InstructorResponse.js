import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Radio, Grid, Modal, Image, Header, Segment, TextArea, Input } from 'semantic-ui-react'
import logo from './logo.svg';
import './InstructorResponse.css';
import SurveyForm from '../SurveyForm/SurveyForm';

class InstructorResponse extends Component {
    
  constructor(props){
      super();
      this.state = {class: props.class, color: props.color};
  }
    
  submitForm(){
     let tmp = this.state.arr;
      for(var it in tmp)
          tmp[it].isActive = false;
      this.setState({ arr: tmp, difficulty:'1', instruction:'1', resources:'1' });

  }

    render() {
    return (
<Modal trigger={<Button style={{backgroundColor: this.state.color}} >{this.state.class}</Button>} size='large' closeIcon closeOnRootNodeClick={false} >
    <Modal.Header>Resolved: Instructor Response</Modal.Header>
    <Modal.Content >
      
      <Modal.Description>
        <Header>{this.state.class}</Header>
       <Form>
        <Grid columns={1} container centered>
                        <Grid.Row stretched>

        <label > <h4> This will be discussed in Lecture on 12/11 </h4> </label>
            </Grid.Row>

        </Grid>
          </Form>        
      </Modal.Description>
    </Modal.Content>
  </Modal>     
          );
  }
}

export default InstructorResponse;
