import React from "react";
import bendjs_logo from "../images/bendjs_logo_square.png";
import styled from "styled-components";


const StyledHeader = styled.header`
justify-content: space-around;
display: flex;

width: screen.width;
height: min(30vw, 12rem);

padding: 1rem;


.bendjs-logo {
  margin-right: min(1rem, 50vw);
  margin-top: min(3rem, 2vw);

  border-radius: min(1rem, 2vw);

  width: min(9rem, 25vw);
  height: auto;
}

.socials-link {
  justify-content: center;
  align-items: center;

  display: flex;

  margin-right: min(1rem, 50vw);
  margin-top: min(6rem, 6vw);

  width: min(17rem, 100vw);
  height: min(4rem, 17vw);

  font-size: min(3rem, 10vw);
}
`;

export default function Header() {

  return (
    <StyledHeader>
      <div>
        <img className="bendjs-logo"src={bendjs_logo} alt="bendjs logo"></img>
      </div>
      <div className="socials-link">
        <a url="" alt="bendjs socials link">/BendJS</a>
      </div>
    </StyledHeader>
  )
}