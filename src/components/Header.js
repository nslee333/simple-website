import React from "react";
import bendjs_logo from "../images/bendjs_logo_square.png";
import styled from "styled-components";


const StyledHeader = styled.header`
display: flex;
justify-content: space-around;

height: min(30vw, 12rem);
width: screen.width;
padding: 1rem;


.BendJSLogo {
  border-radius: min(1rem, 2vw);
  width: min(9rem, 25vw);
  height: auto;
  
  margin-right: min(1rem, 50vw);
  margin-top: min(3rem, 2vw);

}

.SocialsLink {
  display: flex;
  justify-content: center;
  align-items: center;

  width: min(17rem, 100vw);
  height: min(4rem, 17vw);
  font-size: min(3rem, 10vw);
  
  margin-right: min(1rem, 50vw);
  margin-top: min(6rem, 6vw);

}
`;

export default function Header() {

  return (
    <StyledHeader>
      <div>
        <img className="BendJSLogo"src={bendjs_logo} alt="bendjs logo"></img>
      </div>
      <div className="SocialsLink">
        <a url="" alt="bendjs logo">/BendJS</a>
      </div>
    </StyledHeader>
  )
}