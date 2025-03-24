import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { HiChartPie, HiShoppingBag } from "react-icons/hi";
import { PiFlowerBold } from "react-icons/pi";
import { MdOutlineBarChart } from "react-icons/md";
import { Link } from "react-router-dom";
import { Avatar } from "flowbite-react";
import { FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const SideNav = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false); // State to manage sidenav visibility

  // Function to toggle sidenav
  // const toggleSideNav = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      {/* <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFFFFF] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      > */}
      <div className="shadow-lg h-[1311px] p-[48px] bg-[#FFFFFF]">
        <Brand />
        {/* <Link to="/">
          <NavItem Icon={HiChartPie} name="Dashboard" />
        </Link> */}
        <Link to="/customers">
          <NavItem Icon={MdPeople} name="Customer" />
        </Link>
        <Link to="/products">
          <NavItem Icon={HiShoppingBag} name="Product" />
        </Link>
        <Link to="/stocks">
          <NavItem Icon={MdOutlineBarChart} name="Stock" />
        </Link>
        <Link to="/salesReport">
          {/* <NavItem Icon={BiLineChart} name="Sales Report" /> */}
        </Link>
        <Link to="/orders">
          <NavItem Icon={CiShoppingCart} name="Orders" />
        </Link>
        {/* <NavItem Icon={MdPeople} name="People" /> */}
        {/* <NavItem Icon={MdOutlineBarChart} name="Product" /> */}
        {/* <NavItem Icon={CiShoppingCart} name="Orders" /> */}
        {/* <NavItem Icon={BiLineChart} name="Sales Report" /> */}
      </div>
    </div>
  );
};

export default SideNav;

const NavItem = ({ name, Icon, isActive, onClick }) => {
  return (
    <div className="flex gap-[24px] mt-[48px]">
      {/* Icon */}
      <Icon className="h-[32px] w-[32px] text-[#737791]" />
      <p className="font-popines text-[#737791] text-[18px]">{name}</p>
    </div>
  );
};

const Brand = () => {
  return (
    <div className="flex gap-[24px]">
      <div className="flex items-center justify-center rounded-lg bg-[#5D5FEF] h-[56px] w-[56px]">
        <PiFlowerBold className="h-[24px] w-[24px] text-[#FFFFFF]" />
      </div>
      <h1 className="flex justify-center items-center font-popines text-[30px] text-[#151D48]">
        Dabang
      </h1>
    </div>
  );
};
