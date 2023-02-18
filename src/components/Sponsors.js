import ladd_group from "../images/ladd_group_logo.jpg";
import TAO_logo from "../images/TAO_logo-with-wordmark.png";
import uptech_logo from "../images/uptech_logo.png";
import codepen_logo from "../images/codepen_logo.png";
import styled from "styled-components";

const StyledSponsor = styled.div`
  background: #ffffff;
  margin-top: min(14rem, 14vw);
  height: auto;
  
  
  .StyledSponsor__title {
    display: flex;
    justify-content: center;
    min-width: 5rem;
    padding: 3.5rem;
    font-weight: 100;
    font-style: italic;
    font-size: max(2rem, 2vw);
  }

  
  .StyledSponsor__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .uptech_logo {
    max-height: 64px;
    margin: 1rem;
  }

  .TAO_logo {
    height: max(4rem, 4vw);
    max-width: 300px;
    margin: 1rem;
  }
  
  .ladd_logo {
    height: max(6rem, 6vw);
    margin: 1rem;
  }
  
  .codepen_logo {
    margin-top: max(2rem, 1.5vw);
    height: max(2.5rem, 2.5vw);
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }


  .StyledSponsor__new-sponsors {
    padding: max(2rem, 2vw);
    display: flex;
    justify-content: space-around;
    font-weight: 300;
    font-style: italic;
  }

  .new-sponsors__div {
    font-size: max(1.5rem, 1.5vw);
    font-style: italic;
    justify-content: center;
    margin: 1rem;
    padding-inline: 0.5rem;
    padding-block: 0.5rem;
    max-width: 35rem;

    .button_div {
      display: flex;
      justify-content: center;
      margin: 1rem;
      min-width: 15rem;
      font-style: normal;
      font-size: 2rem;
      font-weight: normal;
    }
    
    .sponsors_a {
      display: flex;
      justify-content: center;
      padding-left: 2rem;
      padding: 1rem;
      background-color: #7FE7D7;
      border: 0px;
      border-radius: 7px;
      width: 13rem;
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