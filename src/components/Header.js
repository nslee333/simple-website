import styled from "styled-components";
import Image from "next/image";
import bendjs_logo from "../../public/images/bendjs_logo_square.png";


const StyledHeader = styled.header`
  justify-content: space-around;
  display: flex;

  height: 12rem;
  padding: 1rem;

  .bendjs-logo {
    margin-top: 5rem;
    margin-right: 10rem;
    
    border-radius: 1rem;
    width: 8rem;

    height: auto;
  }

  .socials-link {
    margin-top: 2.25rem;
    margin-right: 2rem;
    
    height: 3rem;
    padding: .5rem;
    
    background-color: #fff;
    border-radius: 7px;
  }

  .links-bar {
    display: flex;
    margin-inline: .5rem;

    font-size: 1.75rem;
    margin-top: .25rem;

    font-style: italic;
  }

  div {
    margin-inline: 2rem;
  }

  span {
    display: flex;
    margin-block: .75rem;

    border-radius: 3px;
    height: 6px;

    width: 50px;  
    background-color: white;
  }

  @media (max-width: 630px) {
    .bendjs-logo {
      margin-left: 2rem;
    }
  }

  @media (max-width: 400px) {
    justify-content: space-between;
    
    transform: scale(0.9);
    .socials-link {
      margin-right: 0rem;
    }
    .bendjs-logo {
      position: absolute;
      margin-left: 0;
      top: -50px;
      left: 10px;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <a href='/'><Image className="bendjs-logo" src={bendjs_logo} alt="bendjs logo" /></a>
      </div>
      <div>
        <div className="socials-link" hidden>
          <div className='links-bar'>
            <a href='/studio' onClick={() => {setNaviClicked(false)}} ><div>Admin</div></a>
            <a href='' onClick={() => {setNaviClicked(false)}}><div>Previous Talks</div></a>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}