import slack_logo from "../../public/images/slack_logo.webp";
import meetup_logo from "../../public/images/meetup_logo.png";
import youtube_logo from "../../public/images/youtube_logo.svg.png";
import Image from "next/image";

export default function Socials() {
  return (
    <>
      <div>
        <div className="m-5 flex justify-center ">
          <h5 className="text-white xs:text-2xl md:text-3xl">
            Check us out on...
          </h5>
        </div>
        <div className="flex justify-center">
          <div className="sm:w-[40rem]">
            <div className="flex xs:grid xs:w-60 xs:justify-center sm:flex sm:w-auto sm:justify-around md:flex">
              <div className="flex justify-center">
                <a href="https://bendjs.slack.com/ssb/redirect">
                  <Image
                    src={slack_logo}
                    className="aspect-auto xs:w-[100px] sm:w-[120px]"
                    alt="Slack Logo"
                  />
                </a>
              </div>
              <div className="xs:my-5 xs:ml-[4.2rem] sm:my-0 sm:ml-0">
                <div className="sm:mt-[1.35rem]">
                  <a href="https://www.meetup.com/BendJS/" className="flex">
                    <Image
                      src={meetup_logo}
                      className=" xs:w-[80px]"
                      alt="Meetup Logo"
                    />
                    <div className="pt-7">
                      <h5 className="text-2xl text-white xs:text-lg sm:text-xl">
                        /BendJS
                      </h5>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex justify-center sm:mt-[.7rem]">
                <a href="https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ">
                  <Image
                    src={youtube_logo}
                    className="my-5 ml-1.5 xs:w-[70px] sm:w-[80px]"
                    alt="Youtube Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
