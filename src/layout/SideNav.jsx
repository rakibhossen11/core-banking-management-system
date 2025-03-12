import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { HiChartPie, HiShoppingBag } from "react-icons/hi";
import { PiFlowerBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [activeItem, setActiveItem] = useState("/");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="shadow-lg w-[345px] h-[1311px] p-[48px] bg-[#FFFFFF]">
      <Brand />
      <Link to="/">
        <NavItem
          Icon={HiChartPie}
          active={activeItem === "/"}
          onClick={() => handleItemClick("/")}
          name="Dashboard"
        />
      </Link>
      <Link to="/usertable">
        <NavItem
          Icon={MdPeople}
          name="People"
          active={activeItem === "/"}
          onClick={() => handleItemClick("/")}
        />
      </Link>
      <Link to="/products">
        <NavItem
          Icon={HiShoppingBag} 
          name="Product"
          active={activeItem === "/"}
          onClick={() => handleItemClick("/")}
        />
      </Link>
      {/* <NavItem Icon={MdPeople} name="People" /> */}
      <NavItem Icon={HiShoppingBag} name="Product" />
      <NavItem Icon={CiShoppingCart} name="Orders" />
      <NavItem Icon={BiLineChart} name="Sales Report" />
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

{
  /* <div className="bg-[#FFFFFF] shadow-lg px-[47px] h-full">
      <Sidebar
        // aria-label="Sidebar with multi-level dropdown example"
        // className="[&>div]:bg-transparent [&>div]:p-0"
      >
        <div className="flex h-full flex-col justify-between py-2">
          <div>
            <form className="pb-3 md:hidden">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to={"/"}>
                  <Sidebar.Item
                    active={activeItem === "/"}
                    onClick={() => handleItemClick("/")}
                    icon={HiChartPie}
                  >
                    Dashboard
                  </Sidebar.Item>
                </Link>
                <Link to={"/products"}>
                  <Sidebar.Item
                    active={activeItem === "products"}
                    onClick={() => handleItemClick("products")}
                    icon={HiShoppingBag}
                  >
                    Products
                  </Sidebar.Item>
                </Link>
                <Link to={"/usertable"}>
                  <Sidebar.Item 
                  active={activeItem === "usertable"}
                  onClick={() => handleItemClick("usertable")} 
                  icon={HiUsers}>Users list</Sidebar.Item>
                </Link>
                <Link to={"/expenses"}>
                  <Sidebar.Item 
                  active={activeItem === "expenses"}
                  onClick={() => handleItemClick("expenses")} 
                  icon={HiUsers}>Expenses</Sidebar.Item>
                </Link>
                <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                  Sign in
                </Sidebar.Item>
                <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                  Sign up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="" icon={HiClipboard}>
                  Docs
                </Sidebar.Item>
                <Sidebar.Item href="" icon={HiCollection}>
                  Components
                </Sidebar.Item>
                <Sidebar.Item href="" icon={HiInformationCircle}>
                  Help
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </div>
      </Sidebar>
    </div> */
}
