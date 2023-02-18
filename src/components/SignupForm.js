import React from "react";
import styled from "styled-components";

import "../App.scss";

const Form = styled.form`
  
  label {
    span {
      display: block;
      margin: 0 0 0.5rem 0;
    }
  }

  input {
    display: block;

    margin-top: .5rem;
    margin-bottom: 1rem;

    border: 1px solid #fff;
    border-radius: 5px;

    width: auto;
    height: 2rem;

    padding-left: 0.5rem;
    font-size: 1.25rem;
  }
  
  input::placeholder {
    font-style: italic;
    color: #000;
  }

  input:focus {
    padding-left: 0.5rem;
  }

  button {

    display: block;
    background-color: #fff;
    color: #000;

    border: 0px;
    border-radius: 8px;

    height: 2.25rem;
    width: 7rem;

    margin-top: 1.5rem;
    padding: .25rem;

    font-size: 1.25rem;
    font-weight: normal;

    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover,
    &:focus,
    &:active,
    &:visited {
      box-shadow: none;
      transform: translate(1px, 1px);
    }
  }
  
`;

export default function SignupForm() {
  return (
    <Form name="newsletter" netlify method="post">
      <input type="hidden" name="form-name" value="newsletter" />
      <label>
        <input type="text" name="name" placeholder='Full Name' />
      </label>
      <label>
        <input type="email" name="email" placeholder='Email' />
      </label>
      <button className="button" type="submit">
        Sign up
      </button>
    </Form>
  );
}
