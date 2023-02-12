import { StyledMemberSpotlight } from "../UI/Common";
import slack_user_photo from "../images/slack-user.png";

export function MemberSpotlight() {
  return (
    <>
      <StyledMemberSpotlight>
        <div className='Member_title'>
          <h5>Member Spotlight</h5>
        </div>
        <div className='Member_div'>
          <div className='photo_frame'>
            <img src={slack_user_photo} className='member_photo'/>
          </div>
          <div className='Member_frame'>
            <h5>John Doe</h5>
            <div className='bio'>
            
            </div>
          </div>
        </div>

      </StyledMemberSpotlight>
    </>
  );
}