import React from "react";
import bendjs_logo from "../../public/images/bendjs_logo_square.png";
import styled from "styled-components";
import Image from "next/image";


const StyledHeader = styled.header`
justify-content: space-around;
display: flex;

height: 12rem;

padding: 1rem;


.bendjs-logo {
  margin-top: 2rem;
  margin-left: 1rem;

  border-radius: min(1rem, 2vw);

  width: 8rem;
  height: auto;
}

.socials-link {
  justify-content: center;
  align-items: center;

  display: flex;

  // margin-right: min(.rem, 50vw);
  margin-right: 1rem;
  margin-top: .50rem;


  font-size: 2.25rem;

  // margin-top: max(3.20rem, 6vw);
  // margin-top: 5rem;

  // width: min(17rem, 100vw);
  // height: min(4rem, 17vw);

  // font-size: min(3rem, 10vw);

}
@media (max-width: 400px) {
  justify-content: space-between;
  
  transform: scale(0.9);
  .socials-link {
    margin-right: 0rem;
  }
  .bendjs-logo {
    margin-left: 0rem;
  }
}
`;

export default function Header() {

  return (
    <StyledHeader>
      <div>
        <Image className="bendjs-logo" src={bendjs_logo} alt="bendjs logo" />
      </div>
      <div className="socials-link">
        <a href='https://www.meetup.com/bendjs/' alt="bendjs socials link">/BendJS</a>
      </div>
    </StyledHeader>
  )
}