import React from "react";
import GoogleIcon from "@/public/social/google.png";
import FacebookIcon from "@/public/social/facebook.png";
import Security from "@/public/login/Partnership in security and safeguarding.png";
import Image from "next/image";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex px-4 md:px-20 gap-16">
      <div className=" w-[100%] md:w-[50%]  flex flex-col pt-14 md:h-auto justify-center gap-5  md:pt-7">
        <div className="text-[22px] font-semibold">
          <h1>Hey, There</h1>
          <h1>Start Sending Anonymous</h1>
          <h1>messages here!</h1>
        </div>
        <p className="text-[15px] font-medium text-slate-500">
          Enter your email address to use the app
        </p>
        <form className="flex flex-col gap-4">
          <input
            className=" h-12 md:h-10 text-sm w-[100%] border-[#c9c9c9] border rounded-full pl-6"
            placeholder="Learning group@gmail.com"
          />
          <button className=" h-12 md:h-10 bg-[#2a2a2a] text-white text-sm w-[100%] border rounded-full pl-4">
            Sign in with Email
          </button>
        </form>
        <p className="py-2 text-center text-base text-slate-500 font-medium">
          OR
        </p>
        <div className="flex flex-col gap-4">
          <button className=" h-12 md:h-10 border-[#c9c9c9] text-black font-medium text-sm w-[100%] border rounded-full pl-4">
            Sign in with Apple
          </button>
          <button className=" h-12 md:h-10 flex justify-center items-center gap-2 border-[#c9c9c9] text-black font-medium text-sm w-[100%] border rounded-full pl-4">
            <Image
              unoptimized
              className="w-4 h-4 "
              alt="google icon"
              width={100}
              height={100}
              src={GoogleIcon}
            />
            Sign in with Google
          </button>
          <button className=" h-12 md:h-10 flex justify-center items-center gap-2 border-[#c9c9c9] text-black font-medium text-sm w-[100%] border rounded-full pl-4">
            <Image
              unoptimized
              className="w-4 h-4"
              alt="facebook icon"
              width={100}
              height={100}
              src={FacebookIcon}
            />
            Sign in with Facebook
          </button>
        </div>
      </div>
      <div className="bg-black hidden md:block p-10 rounded-2xl w-[50%]">
        <Image
          unoptimized
          className="w-[100%]"
          alt="security image"
          width={100}
          height={100}
          src={Security}
        />
      </div>
    </div>
  );
};

export default Login;
