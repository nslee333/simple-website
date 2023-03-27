import React from "react";

export default function Welcome () {
  return (
    <>
      <div className='flex justify-center px-5 pt-10'>
        <div className='italic text-white w-[50rem]'>
          <h4 className='text-4xl my-5'>BendJS</h4>
          <h5 className='text-3xl my-5'>A Javascript meetup in Bend, Oregon</h5>
          <h5 className='text-3xl my-10'>
            This group is for anyone interested in learning Javascript, 
            sharing something they know, networking with other devs, and having a great time! 
          </h5>
          <h5 className='text-3xl my-10'>
            All levels are welcome. Please join our slack workspace for future updates and continuing the conversation.
          </h5>
        </div>
      </div>
    </>
  )
}