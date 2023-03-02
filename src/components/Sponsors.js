import ladd_group from "../../public/images/ladd_group_logo.jpg";
import tao from "../../public/images/TAO_logo-with-wordmark.png";
import uptech from "../../public/images/uptech_logo.png";
import codepen from "../../public/images/codepen_logo.png";
import styled from "styled-components";
import Image from "next/image";

const StyledSponsor = styled.div`
  margin-top: min(14rem, 14vw);
  height: auto;

  background: #ffffff;
  
  .sponsor-title {
    justify-content: center;
    display: flex;

    min-width: 15rem;
    padding: 3.5rem;

    font-size: max(2rem, 2vw);
    font-weight: 100;
    font-style: italic;
  }

  .sponsor-logos {
    flex-wrap: wrap;
    justify-content: space-evenly;

    display: flex;
  }

  .sponsor-logos__uptech-logo {
    margin: 1rem;
    max-height: 64px;
  }

  .sponsor-logos__tao-logo {
    margin: 1rem;
    max-width: 250px;
    height: max(4rem, 4vw);
  }
  
  .sponsor-logos__ladd-logo {
    margin: 1rem;
    height: max(6rem, 6vw);
    width: auto;
  }
  
  .sponsor-logos__codepen-logo {
    margin-top: max(2rem, 1.5vw);
    margin-right: 1rem;

    margin-bottom: 1rem;
    margin-left: 1rem;

    width: 300px;
    height: 55px;
  }


  .sponsor-new {
    justify-content: space-around;
    display: flex;

    padding: max(2rem, 2vw);

    font-weight: 300;
    font-style: italic;
  }

  .sponsor-new__container {
    justify-content: center;

    margin: 1rem;
    max-width: 35rem;

    padding-inline: 0.5rem;
    padding-block: 0.5rem;

    font-size: max(1.5rem, 1.5vw);
    font-style: italic;

    .sponsor-new__contact-container {
      justify-content: center;
      display: flex;

      margin: 1rem;
      min-width: 15rem;

      font-style: normal;
      font-size: 2rem;

      font-weight: normal;

      @media (max-width: 470px) {
        transform: scale(0.8)
      }
    }
    
    .sponsor-new__contact-link {
      justify-content: center;
      display: flex;
      
      border: 0px;
      border-radius: 7px;

      padding: 1rem;
      padding-left: 2rem;
      
      width: 13rem;
      background-color: #7FE7D7;
      
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      &:hover,
      &:focus,
      &:active,
      &:visited {
        box-shadow: none;
        transform: translate(1px, 1px);
      }
    }

  }
`;


export default function Sponsors() {
  return (
    <>
      <StyledSponsor>
      <div className='sponsor-title'>
        <h5>
          Thank you so much to our 
          incredible sponsors!
        </h5>
      </div>
      <div>
        <div className='sponsor-logos'>
          <a href='https://www.uptechstudio.com/'>
            <Image src={uptech} className='sponsor-logos__uptech-logo' alt='uptech logo'/>
          </a>
          <a href='https://www.techoregon.org/'>
            <Image src={tao} className='sponsor-logos__tao-logo' alt='tech oregon logo'/>
          </a>
          <a href='https://codepen.io/'>
            <Image src={codepen} className='sponsor-logos__codepen-logo' alt='codepen logo'/>
          </a>
          <a href='https://www.bendpropertysource.com/'>
            <Image src={ladd_group} className='sponsor-logos__ladd-logo' alt='Ladd group logo'/>
          </a>
        </div>
        <div className='sponsor-new'>
          <div className='sponsor-new__container'>
            <h5>We are always looking for new sponsors</h5>
            <div className='sponsor-new__contact-container'>
              <a htmlFor='button' className='sponsor-new__contact-link' href='mailto:bendjsgroup@gmail.com'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      </StyledSponsor>
    </>
  );
};