import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Methods from '../firebase/Methods';

const StyledInput = styled.input`
display:block;
margin: 20px 0px;
border: 1px solid lightblue;

`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export default class Login extends Component {

    constructor() {
      super();
      this.state = {
        error: null,
        email: '',
        password: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    async handleSubmit(event) {
      event.preventDefault();
      this.setState({ error: '' });
      try {
        await Methods.signInUser(this.state.email, this.state.password);
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
    
   render() {
      return (
        <div>
          <StyledInput
            placeholder='Email Address'
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
          />
         <div>
         <StyledInput
           placeholder='Password'
           name='password'
           type='password'
           onChange={this.handleChange}
           value={this.state.password}
         />
    
         {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                <Link to ='/NoteList'>
                <Button type='submit'> Sign Up </Button>
                </Link>
            </div> 
       </div>
      );
   }
   }