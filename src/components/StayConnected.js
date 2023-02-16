import styled from 'styled-components';
import SignupForm from './SignupForm';

const StyledStayConnected = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 2px solid yellow;
  // margin-top: 7rem;

  .Newsletter {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-evenly;
    // align-items: space-evenly;

    // margin-block: 2rem;
    // margin-inline: max(1rem, 1vw);
    // margin-block: 2rem;
    background-color: #fff;

    min-height: 29rem;

    width: max(45rem, 45vw);
    max-width: 45rem;
    min-width: 300px;


    



    padding: 2rem;
    margin-inline: max(2rem, 2vw);
    border-radius: 7px;

    
    
    // font-size: clamp(20px, 50%, 30px);
    font-size: max(20px, 2vw);

    h3 {
      // font-size: 30px;
      font-size: max(35px, 2vw);
      font-weight: normal;
      font-style: italic;
      margin-bottom: 1.5rem;
    }

    h4 {
      // font-size: 25px;
      font-size: max(30px, 1.5vw);
      font-weight: normal;
      margin-bottom: min(2rem, 2vw);
    }

    .Newsletter_text {
      // max-width: 20rem;
      font-size: 20px;
    }

    .Newsletter_Signup {
      
      background: #e1e1e1;
      
      width: 17rem;
      height: 10rem;
      
      border-radius: 7px;
      padding: 1rem 2rem;

      // margin-left: 4rem;
      margin-top: 2rem;
      // margin-left: 4rem;
    }
    @media (max-width: 745px) {
      .Newsletter_Signup {
        // transform: scale(0.9);
        // margin-top: 2rem;
        // margin-left: -.5rem;
      }
    }

    @media (max-width: 370px) {
      // margin-block: 0;
      // padding: 2rem;

      // h4 h5 {
      //   margin-left: 2rem;
      // }

      // .Newsletter_Signup {
      //   // transform: scale(0.9);
      //   // margin-top: 0.5rem;
      
      // }
    }
  }
  
  .Speaker {
    display: flex;
    flex-wrap: wrap;
    
    background-color: #fff;
    height: max(17rem, 13vw);
    min-height: 29rem;

    width: max(45rem, 45vw);
    max-width: 45rem;
    min-width: 300px;

    padding: 2rem;

    margin-block: 2rem;
    margin-inline: max(2rem, 2vw);
    border-radius: 7px;


    
    h3 {
      font-weight: normal;
      font-size: max(35px, 2vw);
      font-style: italic;
      margin-bottom: .5rem;
    }
    
    h4 {
      font-weight: normal;
      font-size: 30px;
      margin-bottom: .5rem;
    }

    div {
      // font-size: max(25px, .5vw);
      font-size: 20px;
      // max-width: 30rem;
    }
    // @media (max-width: 1385px) {
      
    //   button {

    //     transform: scale(0.85);
    //   }
      
    // }

    @media (max-width: 745px) {
      height: auto;
      // width:
    }

    button {
      background-color: #7FE7D7;
      width: 20rem;
      height: 4rem;
      font-size: 1.75rem;
      border-radius: 7px;
      border: none;
      
      margin-top: 1rem;
    }
    
  }

  // @media (max-width: 1385px) {
  //   display: flex;
  //   justify-content: flow-root;
  // }

  @media (max-width: 370px) {
    // margin-top: 0;

    .Newsletter, .Speaker {
      transform: scale(0.85);
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
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
          <button>Contact Us</button>
        </div>
      </StyledStayConnected>
    </>
  );
}