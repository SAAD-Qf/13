import React from "react";
import { Vortex } from "../lib/Components/Ui/Vortex";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function VortexDemo() {
  return (
    <div className="w-screen h-screen mx-auto rounded-lg min-h-max overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center  flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-serif text-center">
          Hi There Its Bushra Ali ...
        </h2>
        <p className="text-white text-sm font-serif md:text-2xl max-w-xl mt-6 text-center">
          The_Full_Stack_Develpor&apos; I Have Build &apos; Pixel Perfect
          Beuitiful Websites&apos;The React Develpor.
        </p>
        <SignedOut>
          <SignInButton>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Login
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
       
      </Vortex>
    </div>
  );
}
