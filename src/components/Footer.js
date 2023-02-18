import React from "react";
import styled from "styled-components";
import GitHubLogo from "../images/github-mark.svg";

const StyledFooter = styled.footer`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
  font-size: 1.25rem;

  div {
    display: grid;
    justify-content: center;
    padding: .5rem;
  }

  img {
    margin-left: 5rem;
    margin-top: .5rem;
  }

  @media (max-width: 886px) {
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
