import slack_logo from "../../public/images/slack_logo.webp";
import meetup_logo from "../../public/images/meetup_logo.png";
import youtube_logo from "../../public/images/youtube_logo.svg.png";
import Image from "next/image";

export default function Socials() {
  return (
    <>
      <div>
        <div className="m-5 flex justify-center">
          <h5 className="text-white xs:text-2xl md:text-3xl">
            Check us out on...
          </h5>
        </div>
        <div className="flex justify-around xs:flex-wrap sm:flex">
          <div className="mx-6 my-0">
            <a href="https://bendjs.slack.com/ssb/redirect">
              <Image
                src={slack_logo}
                className="my-5 aspect-auto xs:w-[130px] sm:w-[160px]"
                alt="Slack Logo"
              />
            </a>
          </div>
          <div className="my-5 mx-6 ms:mt-0 mm:mt-0 ml:mt-9 sm:mt-12">
            <a href="https://www.meetup.com/BendJS/" className="flex">
              <Image
                src={meetup_logo}
                className="mysm:w-[110px] xs:w-[96px] "
                alt="Meetup Logo"
              />
              <h5 className="mt-10 text-2xl text-white xs:text-lg sm:text-2xl">
                /BendJS
              </h5>
            </a>
          </div>
          <div className="my-5 mx-6 xs:mt-0 sm:mt-4">
            <a href="https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ">
              <Image
                src={youtube_logo}
                className="my-5 xs:w-[96px] mm:mt-3 ml:mt-12 sm:w-[115px]"
                alt="Youtube Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
