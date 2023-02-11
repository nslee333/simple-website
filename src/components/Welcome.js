import React from "react";
import {StyledWelcome} from "../UI/Common";

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