import React, { Component } from 'react';
import { Button, Checkbox, Form, Container, Radio, Grid, Modal, Image, Header, Segment } from 'semantic-ui-react'
import logo from './logo.svg';
import './SurveyForm.css';



class SurveyForm extends Component {
    
  constructor(){
      super();
      this.state = {difficulty:'1', instruction:'1', resources:'1'};
      this.setDifficulty.bind(this);
      this.setInstruction.bind(this);
      this.setResources.bind(this);
  }
    
  setDifficulty = (e, { value }) => this.setState({ difficulty:value })
  setInstruction = (e, { value }) => this.setState({ instruction:value })
  setResources = (e, { value }) => this.setState({ resources:value })
  render() {
      
    return (
<Modal trigger={<Button>Show Modal</Button>} size='large' closeIcon closeOnRootNodeClick={false} >
    <Modal.Header>Survey Form</Modal.Header>
    <Modal.Content >
     
      <Modal.Description>
        <Header>CS 357</Header>
        <Form >
            <Grid columns={3}  container>
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
                    <Button primary type='submit'>Eigenvectors</Button>
                    <Button primary type='submit'>Pagerank</Button>
                    <Button primary type='submit'>COO</Button>
                    <Button primary type='submit'>CSC</Button>
                    <Button primary type='submit'>Complexity Analysis</Button>
             </Grid>
            <Grid>
            <Grid.Column>
            <Button  positive floated='right' type='submit'>Submit</Button>
                </Grid.Column>
                </Grid>
          </Form>        
      </Modal.Description>
    </Modal.Content>
  </Modal>     );
  }
}

export default SurveyForm;
