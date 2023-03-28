import React from "react";

export default function Welcome() {
  return (
    <>
      <div className="flex justify-center px-5 pt-10">
        <div className="w-[50rem] italic text-white xs:my-8 xs:mx-2 sm:my-16 md:my-32">
          <h4 className="my-5 text-4xl">BendJS</h4>
          <h5 className="my-5 text-3xl">A Javascript meetup in Bend, Oregon</h5>
          <h5 className="my-10 text-3xl">
            This group is for anyone interested in learning Javascript, sharing
            something they know, networking with other devs, and having a great
            time!
          </h5>
          <h5 className="my-10 text-3xl">
            All levels are welcome. Please join our slack workspace for future
            updates and continuing the conversation.
          </h5>
        </div>
      </div>
    </>
  );
}
