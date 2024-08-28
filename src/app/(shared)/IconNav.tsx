import React from "react";
import Icon from "@/public/icon/whisper-zone icon.png";
import Image from "next/image";

type Props = {};

const IconNav = (props: Props) => {
  return (
    <div className="flex gap-3 items-center  pt-2 md:pt-5 px-4 md:px-20">
      <Image
        unoptimized
        className="w-10 h-10"
        alt="whisper zone icon"
        width={100}
        height={100}
        src={Icon}
      />
      <h1 className="font-bold text-2xl ">Whisper Zone</h1>
    </div>
  );
};

export default IconNav;
