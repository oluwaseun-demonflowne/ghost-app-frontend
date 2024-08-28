import React from "react";
import GoogleIcon from "@/public/social/google.png";
import FacebookIcon from "@/public/social/facebook.png";
import Security from "@/public/login/Vector (1).png";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="flex bg-white px-4 md:px-20 gap-16">
      <div className=" w-[100%] md:w-[50%]  flex flex-col justify-center h-[90vh] md:h-auto  gap-5  md:pt-7">
        <div className="text-[22px]  font-semibold">
          <h1>Register</h1>
        </div>
        <p className="text-[15px] font-medium text-slate-500">
          Please register to login
        </p>
        <form className="flex mt-10  flex-col gap-4">
          <div className="flex items-center border-[#c9c9c9]  pl-4 border rounded-full">
            <FaUser className="text-[#606060] text-xl" />
            <input
              required
              type="text"
              className=" h-12 rounded-r-full md:h-10 pr-2 text-sm w-[100%]  pl-3 outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-[#c9c9c9] pl-4 border rounded-full">
            <MdEmail className="text-[#606060] text-xl" />
            <input
              required
              type="email"
              className=" h-12 rounded-r-full pr-2 md:h-10 text-sm w-[100%]  pl-3 outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center w-[100%] border-[#c9c9c9] pl-4 border rounded-full">
            <RiLockPasswordFill className="text-[#606060] text-xl" />
            <input
              required
              type="password"
              className=" h-12 md:h-10 rounded-r-full pr-2 text-sm w-[100%]  pl-3 outline-none"
              placeholder="********"
            />
          </div>
          <button className="mt-10 h-12 md:h-10 bg-[#2a2a2a] text-white text-sm w-[100%] border rounded-full pl-4">
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-2 md:mt-0 text-center">
          Already have an account?{" "}
          <Link className="font-bold" href="/login">
            Sign In
          </Link>
        </p>
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

export default Register;
