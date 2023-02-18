import React from "react";
import styled from "styled-components";

const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: min(13rem, 13vw);
  height: auto;
  font-size: max(2rem, 2vw);
  
  .StyledWelcome__Div {
    display: columns;

    align-items: center;

    width: min(70rem, 70vw);
    min-width: 22rem; 
  }
  

  h4, h5 {
    margin: max(1rem, 1vw);
  }

  h4 {
    font-style: italic;
  }

  @media (max-width: 400px) {
    transform: scale(0.9);
  }
`;

export default function Welcome () {
  return (
    <>
      <StyledWelcome>
        <div className='StyledWelcome__Div'>
          <h4>BendJS</h4>
          <h5>A Javascript meetup in Bend, Oregon</h5>
          <h5>
            This group is for anyone interested in learning Javascript, 
            sharing something they know, networking with other devs, and having a great time! 
          </h5>
          <h5>
            All levels are welcome. Please join our slack workspace for future updates and continuing the conversation.
          </h5>
        </div>
      </StyledWelcome>
    </>
  )
}