import styled from "styled-components";
import slack_user_photo from "../images/slack-user.png";

const StyledMemberSpotlight = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  
  height: auto;
  padding-bottom: 2rem;

  background-color: #000;
  color: #fff;
  
  
  .title-container {
    justify-content: center;
    display: flex;
    
    margin-top: 5rem;
    padding: 3rem;

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


    @media (max-width: 1060px) {
      margin-top: 2rem;
      margin-botttom: 2rem;

      .member-container__bio-teal-frame {
        margin-top: 2rem;
      }
    }

    @media (max-width: 520px) {
      transform: scale(0.90);

      margin-top: 0;
      margin-bottom: 0;
    }

    @media (max-width: 420px) {
      transform: scale(0.80);

      .title-container {
        margin-bottom: 0;
        padding: .5rem;
      }

      .member-container__photo-teal-frame {
        width: auto;
        height: auto;
      }
      
      .member-container__photo-black-frame {
        width: 16rem;

        height: 16rem;
        min-height: 0;
      }
      
      .member-container__photo {
        width: 15rem;
        height: 15rem;

        margin-top: .5rem;
        margin-left: .5rem;
      }
    }

  .member-container__photo-teal-frame {
    border-radius: 7px;

    width: 22rem;
    height: 22rem;
    
    min-height: px;
    padding: 1rem;

    background-color: #7FE7D7;
  }
  
  .member-container__photo-black-frame {
    display: flex;
    border-radius: 7px;
        
    width: 22rem;
    height: 22rem;
    
    background-color: #000;
  }
  
  .member-container__photo {
    margin-left: 2rem;
    margin-top: 2rem;

    border-radius: 5px;

    width: 18rem;
    height: 18rem;
  }
  
  .member-container__bio-teal-frame {
    border-radius: 7px;
    padding: 1rem;
    
    background-color: #7FE7D7;
  }
    
  .member-container__bio-black-frame {
    border-radius: 7px;
    padding: max(1rem, 1vw);

    max-width: 40rem;
    min-height: 22.5rem;

    background-color: #000;
  }

  .member-container__bio-member-name {
    margin-bottom: max(2rem, 2vw);
    font-size: 25px;
  }
  
  .member-container__bio-text {
    font-size: 20px  
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
              <img src={slack_user_photo} className='member-container__photo'/>
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