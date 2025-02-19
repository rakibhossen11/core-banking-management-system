import { useState } from "react";
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const SideNav = () => {
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
                  <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
                </Link>
                <Link to={"/products"}>
                  <Sidebar.Item icon={HiShoppingBag}>Products</Sidebar.Item>
                </Link>
                <Link to={"/usertable"}>
                  <Sidebar.Item icon={HiUsers}>Users list</Sidebar.Item>
                </Link>
                <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                  Sign in
                </Sidebar.Item>
                <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                  Sign up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="https://github.com/themesberg/flowbite-react/"
                  icon={HiClipboard}
                >
                  Docs
                </Sidebar.Item>
                <Sidebar.Item
                  href="https://flowbite-react.com/"
                  icon={HiCollection}
                >
                  Components
                </Sidebar.Item>
                <Sidebar.Item
                  href="https://github.com/themesberg/flowbite-react/issues"
                  icon={HiInformationCircle}
                >
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
