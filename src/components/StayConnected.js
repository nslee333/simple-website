import SignupForm from "./SignupForm";

export default function Connected() {
  return (
    <>
      <div className="flex justify-evenly xs:flex-wrap">
        <div className="m-5 h-auto w-[42rem] rounded-md bg-white p-5 sm:h-[25rem]">
          <div className="">
            <h3 className="p-2 text-3xl italic">Newsletter</h3>
            <h4 className="p-2 text-2xl italic">Stay up to date</h4>
            <div className="p-2 italic">
              Sign up for our monthly newsletter where we share local events in
              Bend, tech news and our community member spotlight!
            </div>
          </div>
          <div className="my-2 mx-2 flex">
            <SignupForm />
          </div>
        </div>
        <div
          className="m-5 
                    h-auto 
                    w-[42rem] 
                    min-w-[18.85rem] 
                    rounded-md 
                    bg-white 
                    p-5 
                    sm:h-[25rem]"
        >
          <h3 className="text-3xl italic xs:mt-2">Have something to share?</h3>
          <h4 className="text-2xl italic xs:mt-10">
            We're always looking for speakers
          </h4>
          <div className="italic xs:mt-10">
            If you have something to share, big or small, big or small, please
            get in touch!
          </div>
          <div className="mt-10 mb-2 sm:mt-32">
            <a
              htmlFor="button"
              href="#contact"
              className="shadow-grey 
                        rounded-lg 
                        bg-[#7FE7D7] 
                        p-3 
                        text-2xl 
                        shadow 
                        hover:origin-bottom 
                        hover:translate-y-0.5 
                        hover:shadow-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
