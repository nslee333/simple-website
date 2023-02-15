import { StyledMemberSpotlight } from "../UI/Common";
import slack_user_photo from "../images/slack-user.png";

export function MemberSpotlight() {
  return (
    <>
      <StyledMemberSpotlight>
        <div className='Member_title'>
          <h5>Member Spotlight</h5>
        </div>
        <div className='Member_Over'>
          <div className='Member_div'>
            <div className='photo_frame'>
              <div className='photo_frame_black'>
                <img src={slack_user_photo} className='member_photo'/>
              </div>
            </div>
            <div className='Member_frame'>
              <div className='member_black_frame'>
                <h5 className='member_name'>John Doe</h5>
                <div className='bio'>
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
        </div>
      </StyledMemberSpotlight>
    </>
  );
}