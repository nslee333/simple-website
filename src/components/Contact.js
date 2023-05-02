export default function Contact() {
  const renderForm = () => {
    return (
      <>
        <div name="contact" data-netlify="true" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <div>
              <input
                className="my-2 
                          block 
                          w-full 
                          rounded-md 
                          p-2"
                type="text"
                name="name"
                placeholder="Full Name"
                required={true}
              />
            </div>
          </label>
          <label>
            <div className="my-3">
              <input
                className="my-2 
                          block 
                          w-full 
                          rounded-md 
                          p-2"
                type="email"
                name="email"
                placeholder="Email"
                required={true}
              />
            </div>
          </label>
          <label>
            <div
              className="my-4
                        block
                        w-full"
            >
              <textarea
                className="my-2 
                            h-[10rem] 
                            w-full 
                            resize-none 
                            rounded-md 
                            p-2"
                type="text"
                name="message"
                placeholder="..."
                required={true}
              />
            </div>
          </label>
          <button
            className="shadow-grey 
                        mb-2 
                        ml-2 
                        mt-4 
                        block
                        h-[2rem] 
                        w-[7rem] 
                        rounded-md 
                        bg-white 
                        text-xl 
                        shadow
                        hover:translate-y-0.5
                        hover:origin-bottom 
                        hover:shadow-none"
            type="submit"
          >
            Send
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex justify-center p-2.5">
        <div
          className="mx-2 
                      mt-5 
                      w-[32rem] 
                      min-w-[18.85rem] 
                      rounded-md
                      bg-white "
          id="contact"
        >
          <h1
            className="m-5 
                        flex 
                        justify-center 
                        text-2xl"
          >
            Contact Us...
          </h1>
          <div
            className="m-5 
                        rounded-md
                        bg-neutral-300 
                        p-5"
          >
            {renderForm()}
          </div>
        </div>
      </div>
    </>
  );
}
