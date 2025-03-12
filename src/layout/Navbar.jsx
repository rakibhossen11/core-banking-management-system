import { Avatar, TextInput } from "flowbite-react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiSearch } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[120px] px-[40px] py-[35px] shadow-lg">
      <h1 className="font-popines text-[36px] ">Dashboard</h1>
      <div className="flex items-center bg-[#F9FAFB] h-[60px] w-[513px] rounded-[16px] px-[24px] py-[14px]">
        <CiSearch className="w-[24px] h-[24px]" />
        <input
          className="border-none w-full bg-[#F9FAFB] focus:none"
          type="text"
        />
      </div>
      <div className="flex gap-[42px]">
        <div></div>
        <div className="flex items-center bg-[#FFFAF1] p-[12px] rounded-lg">
            <FaBell className="h-[32] w-[32] text-[#FFA412]" />
        </div>
        {/* profile section */}
        <div className="flex justify-center items-center gap-[20px]">
          <div>
            <Avatar
              img="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/461652044_1928533117914314_8728799906055827205_n.jpg?stp=c120.0.719.719a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=5J2LbSAe1ogQ7kNvgHbPn7x&_nc_oc=Adj-7HM__4TfSyo5YV_6m_ydgAuwX1Z-yFboZr8Y7AZDG7f5rKfNkFH1ZhlSEen8hOM&_nc_zt=24&_nc_ht=scontent.fdac138-1.fna&_nc_gid=ALPAclMY29JPqJrJmUeE_sP&oh=00_AYFPYFC06bKTvmS5UTmF75V9wp04VCpQ4cZDUbGzhXJzAA&oe=67D0DA5D"
              alt="avatar of Jese"
              rounded
            />
          </div>
          <div>
            <h1 className="font-popines text-[16px]">Rakib Hossen</h1>
            <p className="font-popines text-[#737791] text-[14px]">Admin</p>
          </div>
          <div>
            <TiArrowSortedDown className="h-[16px] w-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
