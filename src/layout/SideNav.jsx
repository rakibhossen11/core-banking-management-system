import { useState } from "react";
import { Sidebar, Dropdown, Avatar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiArrowSmLeft,
  HiTable,
  HiSearch,
  HiUsers,
  HiLogin,
  HiPencil,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [activeItem, setActiveItem] = useState("products");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="[&>div]:bg-transparent [&>div]:p-0"
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
    </div>
  );
};

export default SideNav;
