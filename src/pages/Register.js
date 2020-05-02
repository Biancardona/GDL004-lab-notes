import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/Methods';
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
export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
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
      await Methods.createUser(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  async googleSignIn() {
    try {
      await signInWithGoogle();
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
       <div>
       <StyledInput
         placeholder='Confirm Password'
         name='confirm password'
         type='password'
         onChange={this.handleChange}
         value={this.state.password}
       />
       <div>
       {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
              <Link to ='/home'>
              <Button type='submit'> Sign Up </Button>
              </Link>
              <Button  type="button" onClick={this.googleSignIn}> Sign in with Google </Button>
              <p>Are you already member? <Link to='/Login'> Sign In </Link></p>
          </div> 
     </div>
     </div>
     </div>
    );
  }
}