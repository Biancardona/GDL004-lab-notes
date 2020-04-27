import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledInput = styled.input`
display:block;
margin: 20px 0px;
border: 1px solid lightblue;

`;

  function LoginRegister() {
    return (
      <div>
        <StyledInput
        
          placeholder="Email Address"
        />
       <div>
       <StyledInput
   
         placeholder="Password"
       />
       <div>
       <StyledInput
         placeholder="Confirm Password"
       />
       <div>
        <ul>
              <Link to ='/home'>
              <li> Sign Up</li>
              </Link>
              <p>Are you already member?
              <Link to='/signIn'>
              <li> Sign In</li>
              </Link>
              </p>
          </ul>
          </div> 
     </div>
     </div>
     </div>
    );
  }

export default LoginRegister