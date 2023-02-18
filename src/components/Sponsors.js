import ladd_group from "../images/ladd_group_logo.jpg";
import TAO_logo from "../images/TAO_logo-with-wordmark.png";
import uptech_logo from "../images/uptech_logo.png";
import codepen_logo from "../images/codepen_logo.png";
import styled from "styled-components";

const StyledSponsor = styled.div`
  margin-top: min(14rem, 14vw);
  height: auto;

  background: #ffffff;
  
  .StyledSponsor__title {
    justify-content: center;
    display: flex;

    min-width: 5rem;
    padding: 3.5rem;

    font-size: max(2rem, 2vw);
    font-weight: 100;
    font-style: italic;
  }

  
  .StyledSponsor__logos {
    flex-wrap: wrap;
    justify-content: space-evenly;

    display: flex;
  }

  .uptech_logo {
    margin: 1rem;
    max-height: 64px;
  }

  .TAO_logo {
    margin: 1rem;
    max-width: 300px;
    height: max(4rem, 4vw);
  }
  
  .ladd_logo {
    margin: 1rem;
    height: max(6rem, 6vw);
  }
  
  .codepen_logo {
    margin-top: max(2rem, 1.5vw);
    margin-right: 1rem;

    margin-bottom: 1rem;
    margin-left: 1rem;

    height: max(2.5rem, 2.5vw);
  }


  .StyledSponsor__new-sponsors {
    justify-content: space-around;
    display: flex;

    padding: max(2rem, 2vw);

    font-weight: 300;
    font-style: italic;
  }

  .new-sponsors__div {
    justify-content: center;

    margin: 1rem;
    max-width: 35rem;

    padding-inline: 0.5rem;
    padding-block: 0.5rem;

    font-size: max(1.5rem, 1.5vw);
    font-style: italic;

    .button_div {
      justify-content: center;
      display: flex;

      margin: 1rem;
      min-width: 15rem;

      font-style: normal;
      font-size: 2rem;

      font-weight: normal;
    }
    
    .sponsors_a {
      justify-content: center;
      display: flex;
      
      border: 0px;
      border-radius: 7px;
      padding-left: 2rem;
      
      width: 13rem;
      padding: 1rem;
      
      background-color: #7FE7D7;
      
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
      <div className='StyledSponsor__title'>
        <h5>
          Thank you so much to our 
          incredible sponsors!
        </h5>
      </div>
      <div>
        <div className='StyledSponsor__logos'>
          <a href='https://www.uptechstudio.com/'>
            <img src={uptech_logo} className='uptech_logo'/>
          </a>
          <a href='https://www.techoregon.org/'>
            <img src={TAO_logo} className='TAO_logo'/>
          </a>
          <a href='https://codepen.io/'>
            <img src={codepen_logo} className='codepen_logo'/>
          </a>
          <a href='https://www.bendpropertysource.com/'>
            <img src={ladd_group} className='ladd_logo'/>
          </a>
        </div>
        <div className='StyledSponsor__new-sponsors'>
          <div className='new-sponsors__div'>
            <h5>We are always looking for new sponsors</h5>
            <div className='button_div'>
              <a htmlFor='button' className='sponsors_a' href='mailto:bendjsgroup@gmail.com'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      </StyledSponsor>
    </>
  );
};