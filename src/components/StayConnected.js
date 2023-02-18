import styled from 'styled-components';
import SignupForm from './SignupForm';

const StyledStayConnected = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;

  align-items: center;
  display: flex;

  .Newsletter {
    flex-wrap: wrap;
    display: flex;

    margin-inline: max(2rem, 2vw);
    margin-top: 2rem;

    margin-bottom: 2rem;
    border-radius: 7px;

    width: max(45rem, 45vw);
    min-width: 300px;

    max-width: 45rem;
    min-height: 29rem;
    
    padding: 2rem;
    background-color: #fff;
    
    font-size: max(20px, 2vw);

    h3 {
      margin-bottom: 1.5rem;
      font-size: max(35px, 2vw);

      font-weight: normal;
      font-style: italic;
    }

    h4 {
      margin-bottom: min(2rem, 2vw);

      font-size: max(30px, 1.5vw);
      font-weight: normal;
    }

    .Newsletter_text {
      font-size: 20px;
    }

    .Newsletter_Signup {
      background: #e1e1e1;
      margin-top: 2rem;

      border-radius: 7px;
     
      width: 17rem;
      height: 10rem;

      padding: 1rem 2rem;
    }

    @media (max-width: 370px) {
      transform: scale(0.85);
      margin-top: 0;
    }
  }
  
  .Speaker {
    flex-wrap: wrap;
    display: flex;
    
    margin-top: 2rem;
    margin-bottom: 2rem;

    margin-inline: max(2rem, 2vw);
    border-radius: 7px;

    width: max(45rem, 45vw);
    max-width: 45rem;
    min-width: 300px;

    height: max(17rem, 13vw);
    min-height: 29rem;
    
    padding: 2rem;
    background-color: #fff;
    
    h3 {
      margin-bottom: 4rem;

      font-size: max(35px, 2vw);
      font-weight: normal;
      font-style: italic;
    }
    
    h4 {
      margin-bottom: 4rem;

      font-size: 30px;
      font-weight: normal;
    }

    div {
      margin-bottom: 3rem;
      font-size: 20px;
    }
    

    @media (max-width: 745px) {
      height: auto;
    }

    a {
      justify-content: center;
      align-items: center;

      display: flex;

      border: none;
      border-radius: 7px;

      width: 20rem;
      height: 3rem;

      background-color: #7FE7D7;
      cursor: pointer;

      font-size: 1.75rem;

      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      &:hover,
      &:focus,
      &:active,
      &:visited {
        box-shadow: none;
        transform: translate(1px, 1px);
    }
  }
  
  @media (max-width: 370px) {
    justify-content: center;
    align-items: center;

    display: flex;
    .Newsletter {
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
    
    .Speaker {
      transform: scale(0.75);

      margin-top: 0rem;
      margin-bottom: 0rem;
    }

    transform: scale(0.85);
      margin-top: 0;
    }
`;


export default function Connected () {
  return (
    <>
      <StyledStayConnected>
        <div className='Newsletter'>
          <div className='Newsletter_text'>
            <h3>Newsletter</h3>
            <h4>Stay up to date</h4>
            <div>
            Sign up for our monthly newsletter where we share local events 
            in Bend, tech news and our community member spotlight!
            </div>
          </div>
          <div className='Newsletter_Signup'>
            <SignupForm />
          </div>
        </div>
        <div className='Speaker'>
          <h3>Have something to share?</h3>
          <h4>We're always looking for speakers</h4>
          <div>
            If you have something to share, big or small,
            big or small, please get in touch!
          </div>
          <a htmlFor='button' href='mailto:bendjsgroup@gmail.com'>Contact Us</a>
        </div>
      </StyledStayConnected>
    </>
  );
}