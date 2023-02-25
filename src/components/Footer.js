import React from "react";
import styled from "styled-components";
import GitHubLogo from "../images/github-mark.svg";

const StyledFooter = styled.footer`
  justify-content: center;

  display: flex;

  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  font-size: 1.25rem;

  div {
    justify-content: center;
    display: grid;

    padding: .5rem;
  }

  img {
    height: 5rem;
    width: 5rem;
    margin-left: 5rem;
    margin-top: .5rem;
  }

  @media (max-width: 886px) {
    margin-top: 0rem;
    margin-bottom: 1.5rem;
    
    div {
      transform: scale(0.85);
    }
  }
`;



export default function Footer() {
  return (
    <>
      <StyledFooter>
        <a href='https://github.com/BendJS/simple-website'>
          <div>
            Contribute to this website
            <img src={GitHubLogo} alt='GitHub Logo'/>
          </div>
        </a>
      </StyledFooter>
    </>
  );
}
