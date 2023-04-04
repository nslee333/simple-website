import ladd_group from "../../public/images/ladd_group_logo.jpg";
import tao from "../../public/images/tao_logo.png";
import uptech from "../../public/images/uptech_logo.png";
import codepen from "../../public/images/codepen_logo.png";
import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <div className="bg-white p-10">
        <div>
          <h5 className="mb-5 flex justify-center text-black xs:text-2xl md:text-3xl">
            Thank you so much to our incredible sponsors!
          </h5>
        </div>
        <div className="">
          <div
            className="flex 
                        justify-around 
                        xs:flex-wrap 
                        xs:pb-5 
                        md:pb-14 
                        md:pt-20"
          >
            <a href="https://www.uptechstudio.com/">
              <Image
                src={uptech}
                className="m-5 
                          aspect-auto 
                          xs:w-[200px] 
                          md:w-[260px]"
                alt="uptech logo"
              />
            </a>
            <a href="https://www.techoregon.org/">
              <Image
                src={tao}
                className="m-5 aspect-auto xs:w-[200px] md:w-[260px]"
                alt="tech oregon logo"
              />
            </a>
            <a href="https://codepen.io/">
              <Image
                src={codepen}
                className="mb-5 ml-5 mr-5 mt-8 aspect-auto xs:w-[200px] md:w-[260px] "
                alt="codepen logo"
              />
            </a>
            <a href="https://www.bendpropertysource.com/">
              <Image
                src={ladd_group}
                className="mb-5 
                            ml-5 
                            mr-5 
                            aspect-auto 
                            xs:mb-0 
                            xs:mt-5 
                            xs:w-[200px] 
                            md:mt-2 
                            md:w-[260px]"
                alt="ladd group logo"
              />
            </a>
          </div>
          <div className="flex justify-center">
            <div>
              <h5 className="mt-5 text-2xl italic md:text-3xl">
                We are always looking for new sponsors
              </h5>
              <div className="flex justify-center">
                <a
                  htmlFor="button"
                  className="shadow-grey 
                              mt-5 
                              rounded 
                              bg-[#7FE7D7] 
                              p-3 
                              text-xl 
                              shadow 
                              hover:origin-bottom 
                              hover:translate-y-0.5 
                              hover:shadow-none 
                              md:text-2xl"
                  href="#contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
