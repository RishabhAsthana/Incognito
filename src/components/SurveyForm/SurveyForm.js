import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Radio, Grid, Modal, Image, Header, Segment } from 'semantic-ui-react'
import logo from './logo.svg';
import './SurveyForm.css';

class SurveyForm extends Component {
    
  constructor(props){
      super();
      this.state = {class: props.class,
                    difficulty:'1', instruction:'1', resources:'1',
                    arr: [
                    { name: "Eigenvectors", isActive: false },
                    { name: "Pagerank", isActive: false },
                    { name: "COO", isActive: false },
                    { name: "CSC", isActive: false },
                    { name: "Complexity Analysis", isActive: false }
                    ],
                    modalOpen:false
                   };
      this.setDifficulty.bind(this);
      this.setInstruction.bind(this);
      this.setResources.bind(this);
      this.handleOpen.bind(this);
      this.onClick.bind(this);
  }
    
  handleOpen = () => this.setState({ modalOpen: true });

  submitForm(){
     let tmp = this.state.arr;
      for(var it in tmp)
          tmp[it].isActive = false;
      this.setState({ arr: tmp, difficulty:'1', instruction:'1', resources:'1', modalOpen:false });

  }

  onClick(index) {
        let tmp = this.state.arr;
        tmp[index].isActive = !tmp[index].isActive;
        this.setState({ arr: tmp });
    }
    
  setDifficulty = (e, { value }) => this.setState({ difficulty:value })
  setInstruction = (e, { value }) => this.setState({ instruction:value })
  setResources = (e, { value }) => this.setState({ resources:value })
  render() {
      
    return (
    <Modal 
    trigger={<Button onClick={this.handleOpen} color="yellow">Survey Request</Button>} 
    size='small' 
    dimmer='blurring' 
    open = {this.state.modalOpen}
    closeOnRootNodeClick={false}
    >
    <Modal.Header>Survey Form</Modal.Header>
    <Modal.Content >
     
      <Modal.Description>
        <Header>{this.state.class}</Header>
        <Form >
            <Grid columns={3} container>
            <Grid.Row>
                <Grid.Column width={5}>
                
                </Grid.Column>
                <Grid.Column width={2} textAlign='center' >
              <label> <h4> Difficulty </h4> </label>
                </Grid.Column>

                <Grid.Column width={2}>
                <Form.Group inline>
                  <Form.Field control={Radio} label='' value='1' checked={this.state.difficulty === '1'} onChange={this.setDifficulty} />
                  <Form.Field control={Radio} label='' value='2' checked={this.state.difficulty === '2'} onChange={this.setDifficulty} />
                  <Form.Field control={Radio} label='' value='3' checked={this.state.difficulty === '3'} onChange={this.setDifficulty} />
                  <Form.Field control={Radio} label='' value='4' checked={this.state.difficulty === '4'} onChange={this.setDifficulty} />
                  <Form.Field control={Radio} label='' value='5' checked={this.state.difficulty === '5'} onChange={this.setDifficulty} />
                </Form.Group>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                
                <Grid.Column width={5}>
                
                </Grid.Column>
                <Grid.Column width={2} >
              <label > <h4> Instruction </h4> </label>
                </Grid.Column>

                <Grid.Column width={2} >
                <Form.Group inline>
                  <Form.Field control={Radio} label='' value='1' checked={this.state.instruction === '1'} onChange={this.setInstruction} />
                  <Form.Field control={Radio} label='' value='2' checked={this.state.instruction === '2'} onChange={this.setInstruction} />
                  <Form.Field control={Radio} label='' value='3' checked={this.state.instruction === '3'} onChange={this.setInstruction} />
                  <Form.Field control={Radio} label='' value='4' checked={this.state.instruction === '4'} onChange={this.setInstruction} />
                  <Form.Field control={Radio} label='' value='5' checked={this.state.instruction === '5'} onChange={this.setInstruction} />
                </Form.Group>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row >
                
                <Grid.Column width={5}>
                </Grid.Column>
                <Grid.Column width={2}>
              <label> <h4> Resources </h4></label>
                </Grid.Column>

                <Grid.Column width={2} >
                <Form.Group inline>
                  <Form.Field control={Radio} label='' value='1' checked={this.state.resources === '1'} onChange={this.setResources} />
                  <Form.Field control={Radio} label='' value='2' checked={this.state.resources === '2'} onChange={this.setResources} />
                  <Form.Field control={Radio} label='' value='3' checked={this.state.resources === '3'} onChange={this.setResources} />
                  <Form.Field control={Radio} label='' value='4' checked={this.state.resources === '4'} onChange={this.setResources} />
                  <Form.Field control={Radio} label='' value='5' checked={this.state.resources === '5'} onChange={this.setResources} />
                </Form.Group>
                </Grid.Column>
            </Grid.Row>
          
          </Grid>
            
            
            <Grid centered>
              <label> <h4 style={{paddingTop:'0.6em'}}> Challenging Concepts : </h4></label>
                    {this.state.arr.map((el, index) =>
                    <Button toggle key={index} active = {el.isActive} onClick={() => this.onClick(index)}>
                        {el.name} 
                    </Button>
                    )}
             </Grid>
            <Grid>
                <Grid.Column>
                    <Button  primary floated='right' type='submit' onClick={() => this.submitForm()}>Submit</Button>                      
                    <Button negative floated='right' type='submit' onClick={() => this.submitForm()}>Cancel</Button>
                </Grid.Column>
                </Grid>
          </Form>        
      </Modal.Description>
    </Modal.Content>
  </Modal>     );
  }
}

export default SurveyForm;
