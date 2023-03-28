import slack_logo from "../../public/images/slack_logo.webp";
import meetup_logo from "../../public/images/meetup_logo.png";
import youtube_logo from "../../public/images/youtube_logo.svg.png";
import Image from "next/image";

export default function Socials() {
  return (
    <>
      <div>
        <div className="m-5 flex justify-center">
          <h5 className="text-3xl text-white">Check us out on...</h5>
        </div>
        <div className="flex justify-around xs:flex-wrap">
          <div className="mx-6 my-0">
            <a href="https://bendjs.slack.com/ssb/redirect">
              <Image
                src={slack_logo}
                className="my-5 aspect-auto w-[160px]"
                alt="Slack Logo"
              />
            </a>
          </div>
          <div className="mx-6 mt-12 max-[390px]:mt-0">
            <a href="https://www.meetup.com/BendJS/" className="flex">
              <Image
                src={meetup_logo}
                className="w-[110px] "
                alt="Meetup Logo"
              />
              <h5 className="mt-10 text-2xl text-white">/BendJS</h5>
            </a>
          </div>
          <div className="mx-6 mt-2 max-[390px]:mt-0">
            <a href="https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ">
              <Image
                src={youtube_logo}
                className="my-5 mt-12 w-[115px]"
                alt="Youtube Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
