import Image from "next/image";
import { createClient } from "next-sanity";
import { urlFor } from "../pages";

export default function MemberSpotlight(member) {
  return (
    <>
      {member.props ? (
        <div className="sm:py-15  bg-black p-5 xs:my-0 xs:flex-wrap  md:block  ">
          <h5
            className=" mx-1
                        flex
                        justify-center 
                        p-5 
                        text-white 
                        xs:text-2xl 
                        sm:text-3xl"
          >
            Member Spotlight
          </h5>

          <div className="xs:mx-1 xs:flex xs:justify-center ">
            <div className="align-center block justify-around  xs:p-0 md:flex md:w-[50rem] lg:w-[70rem]">
              <div className="">
                <div
                  className=" rounded-md
                            bg-[#7FE7D7]
                              p-0.5 
                              align-middle

                              xs:my-2 
                              xs:max-h-[12.5rem]
                              xs:min-h-[9rem]
                              xs:min-w-[5rem]

                              xs:max-w-[12.5rem]
                              sm:m-2

                              md:m-5
                              md:max-h-[15.3rem]
                              md:min-h-[16rem]
                              
                              md:min-w-[16rem] 
                              md:max-w-[16rem]
                              min-[964px]:min-h-[13rem]
                              min-[964px]:min-w-[14rem]

                              lg:max-h-[30rem]
                              lg:max-w-[30rem]"
                >
                  <div
                    className=" m-5
                            h-[22rem]
                            max-h-[20rem]

                            min-h-[18rem]
                            w-[20rem]
                            min-w-[14rem]
                            max-w-[25rem] 
                            rounded-md

                            bg-black 
                            xs:m-2

                            xs:max-h-[11rem]
                            xs:min-h-[11rem] 
                            xs:min-w-[11rem]
                            xs:max-w-[11rem]
                            xs:p-5

                            md:max-h-[14rem]
                            md:min-h-[14rem] 
                            md:min-w-[14rem]
                            md:max-w-[14rem]

                            lg:max-h-[20rem]
                            lg:max-w-[20rem]
                            "
                  >
                    <Image
                      className="content-center rounded-md"
                      src={urlFor(member.props[0].memberImage).url()}
                      alt="member profile"
                      width={300}
                      height={175}
                    />
                  </div>
                </div>
              </div>
              <div
                className="h-auto
                            min-h-[10rem] 
                            min-w-[10rem] 
                            max-w-[30rem]
                            rounded-md
                            bg-[#7FE7D7] 
                            xs:m-0 
                            xs:p-0.5
                            sm:m-2
                            md:m-5
                            lg:max-w-[40rem]"
              >
                <div className="m-5 rounded-md bg-black  xs:m-2 xs:p-2">
                  <h5 className="sm:text-md my-2  text-white sm:text-lg md:text-xl lg:text-2xl">
                    {member.props[0].memberName}
                  </h5>
                  <div className=" md:text-md md:text-md text-white xs:text-sm lg:text-lg">
                    {member.props[0].memberBio}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-03-05",
  useCdn: false,
});

export async function getStaticProps() {
  const member = await client.fetch(`*[_type == 'MemberSpotlight']`);

  return {
    props: {
      member,
    },
  };
}
