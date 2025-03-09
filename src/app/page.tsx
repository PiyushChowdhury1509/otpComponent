'use client'

import { FaComputer } from "react-icons/fa6";
import Otp from "@/components/otp";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";


export default function Home() {

  let [ disable, setDisable ] = useState<boolean>(true)

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-950">
      <div className="min-w-md min-h-md border-4 rounded-2xl">
        <div className="h-full mx-6 my-6">
          <div className="items-center flex justify-center mb-32">
            <FaComputer className="h-10 w-10 mr-5"/>
            <h1 className="text-4xl font-bold">
              <span className="text-teal-500">Webinar</span>.gg
            </h1>
          </div>
          <h1 className="text-white text-2xl font-semibold text-center mb-16">Check Your Email For A Code</h1>
          <h1 className="text-center text-gray-300 mb-10">Please Enter The Authentication Code That Is Sent To Your Email Id</h1>
          <div className="items-center mb-3">
            <Otp setDisable={setDisable}/>
          </div>
          <div className="flex justify-center mb-7">
            <FaRegClock className="text-blue-200 mr-2"/>
            <h1>time</h1>
          </div>
          <button disabled={disable} className="w-full bg-teal-700 text-gray-200 text-center p-2 text-xl font-semibold rounded-2xl mb-5">Verify</button>
          <h1 className="text-center text-gray-300 cursor-pointer">Didn't recieve the otp? click <span className="hover:underline text-blue-300">here</span></h1>
        </div>
      </div>
    </div>
  );
}
