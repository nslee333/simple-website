import React from "react";
import styled from "styled-components";
import github_logo from "../../public/images/github_logo_white.svg";
import Image from "next/image";

const StyledFooter = styled.footer`
justify-content: center;
display: flex;

margin-top: 3.5rem;
margin-bottom: 3.5rem;

font-size: 1.25rem;

div {
    color: #fff;
    justify-content: center;

    display: grid;
    padding: .5rem;
  }

  .Footer__github-logo {
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
            <Image src={github_logo} alt='GitHub Logo'className='Footer__github-logo'/>
          </div>
        </a>
      </StyledFooter>
    </>
  );
}
