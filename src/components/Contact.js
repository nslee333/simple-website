import styled from "styled-components";
import { Form } from "./SignupForm";
import { useState } from "react";

const FormExtended = styled(Form)`
  input {
    width: min(35rem, 100% - .9rem);
    height: 2rem;

    @media (max-width: 430px) {
      max-width: 15.5rem;
    }
  }

  input:focus-visible {
    outline: 2px solid #000;
  }
`;

const StyledContact = styled.div`
  justify-content: center;
  display: flex;

  border-radius: 10px;
  padding: 2rem;


  .contact {
    border-radius: 7px;
    width: max(35rem, 45vw);

    min-width: 300px;
    max-width: 35rem;

    padding: 2rem;
    background-color: #fff;

    @media (max-width: 745px) {
      height: auto;
    }
  }

  h3 {
    font-style: italic;
    font-size: 30px;
  }

  .contact__title {
    padding-left: .5rem;
    padding-bottom: 1.5rem;

    padding-right: .5rem;
  }
  
  .contact__frame {
    border-radius: 7px;
    padding: 1.5rem;

    background-color: #e1e1e1;
  }

  .contact__message {
    border: none;
    border-radius: 7px;

    height: 10rem;
    width: min(35rem, 100% - 1rem);
    
    padding-top: .5rem;
    padding-left: .5rem;

    padding-bottom: .5rem;
    padding-right: .5rem;

    font-size: 1rem;
    font-family: 'Open Sans';

    resize: none;
  }

  .contact__message:focus-visible {
    outline: 2px solid #000;
  }

  @media (max-width: 370px) {
    justify-content: center;
    align-items: center;

    display: flex;
    transform: scale(0.85);

    margin-top: -10rem;
    margin-bottom: -2rem;
  }

`;



export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  
  const sendMessage = (event) => {
    event.preventDefault();

    if (messageSent === false) {
      setMessageSent(true);
    }
  }

  const renderForm = () => {
    return (
      messageSent ? (
        <>
          <h2>Message Sent!</h2>
        </> 
      ) : (
        <>
        <FormExtended name="contact" data-netlify="true" method="post">
          <input type="hidden" name="form-name" value="contact"/>
          <label>
            <input type="text" name="name" placeholder="Full Name" required={true}/>
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" required={true}/>
          </label>
          <label>
            <textarea className="contact__message" type="text" name='message' placeholder="..." required={true}/>
          </label>
          <button className="button" type="submit" onClick={event => sendMessage(event)}>
            Send
          </button>
        </FormExtended>
        </>
       )
    );
  }

  return (
      <>
        <StyledContact>
          <div className="contact" id='contact'>
            <h1 className="contact__title">Contact Us...</h1>
            <div className="contact__frame">
              {renderForm()}
            </div>
          </div>
        </StyledContact>
      </>
    )

}