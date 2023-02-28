import styled from "styled-components";
import slack_user_photo from "../../public/images/slack-user.png";
import user from "../../public/images/3.jpg";

const StyledMemberSpotlight = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  
  max-height: 65rem;

  padding-bottom: 2rem;

  background-color: #000;
  color: #fff;
  
  
  .title-container {
    justify-content: center;
    display: flex;

    padding: 2rem;

    font-size: 30px;
    font-weight: medium;
  }

  .member-container {
    justify-content: space-evenly;
    align-items: center;

    flex-wrap: wrap;
    display: flex;

    margin-top: 5rem;
    margin-bottom: 5rem;

    height: auto;
    background-color: #000;


    @media (max-width: 1118px) {
      margin-top: 2rem;
      margin-botttom: 2rem;

      padding-bottom: 2rem;
      padding-top: 2rem;

      .member-container__bio-teal-frame {
        margin-top: 2rem;
      }
    }

    @media (max-width: 520px) {
      transform: scale(0.90);

      margin-top: -2rem;
      margin-bottom: 0;

      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    @media (max-width: 420px) {

      max-height: 55rem;
      transform: scale(0.75);

      margin-top: -5rem;
      margin-bottom: 0;

      .title-container {
        margin-bottom: 0;
        padding: .5rem;
      }

      .member-container__photo-teal-frame {
        margin-top: 0;
        margin-bottom: 0;

        width: auto;
        height: auto;
      }
      
      .member-container__photo-black-frame {
        min-height: 0;
      }
      
      .member-container__photo {
        margin-top: 2rem;
        margin-left: 2rem;
      }
    }
  }

  .member-container__photo-teal-frame {
    border-radius: 7px;

    min-width: 24rem;
    min-height: 24rem;
    
    padding: 1rem;

    background-color: #7FE7D7;

    @media (max-width: 340px) {
      margin-top: 0;
      margin-bottom: 0;
      transform: scale(0.9);
    }
  }
  
  .member-container__photo-black-frame {
    display: flex;
    border-radius: 7px;
        
    width: 24rem;
    height: 24rem;
    
    background-color: #000;
  }
  
  .member-container__photo {
    margin-left: 2rem;
    margin-top: 2rem;

    border-radius: 7px;

    width: 20rem;
    height: 20rem;
  }
  
  .member-container__bio-teal-frame {
    border-radius: 7px;
    padding: 1rem;

    min-width: 24rem;
    min-height: 24rem;
    
    background-color: #7FE7D7;

    @media (max-width: 340px) {
      transform: scale(0.9);
    }
  }
    
  .member-container__bio-black-frame {
    border-radius: 7px;
    padding: max(1rem, 1vw);

    max-width: 40rem;
    min-width: 22rem;
    
    max-height: 30rem;
    min-height: 22rem;

    background-color: #000;
  }

  .member-container__bio-member-name {
    margin-bottom: max(2rem, 2vw);
    font-size: 25px;
  }
  
  .member-container__bio-text {
    font-size: 20px  
  }

  @media (max-width: 560px) {
    margin-top: 2rem;
    margin-bottom: 2rem;

    padding: 0;

    .title-container {
      padding-top: 5rem;
    }
  }

  @media (max-width: 420px) {
    height: 55rem;
    
    padding-top: 0rem;
    padding-bottom: 0rem;
  }

`;

export function MemberSpotlight() {
  return (
    <>
      <StyledMemberSpotlight>
        <div className='title-container'>
          <h5>Member Spotlight</h5>
        </div>
        <div className='member-container'>
          <div className='member-container__photo-teal-frame'>
            <div className='member-container__photo-black-frame'>
              <img src={user} className='member-container__photo'/>
            </div>
          </div>
          <div className='member-container__bio-teal-frame'>
            <div className='member-container__bio-black-frame'>
              <h5 className='member-container__bio-member-name'>John Doe</h5>
              <div className='member-container__bio-text'>
              If you can keep your head when all about you
              Are losing theirs and blaming it on you,
              If you can trust yourself when all men doubt you,
              But make allowance for their doubting too;
              If you can keep your head when all about you
              Are losing theirs and blaming it on you,
              If you can trust yourself when all men doubt you,d 
              </div>
            </div>
          </div>
        </div>
      </StyledMemberSpotlight>
    </>
  );
}