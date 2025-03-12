import React, { useEffect } from "react";
import { MdAnalytics } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { CiShoppingTag } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import CardDash from "../components/Card/CardDash";
import Navbar from "../layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/feature/productSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(dispatch(fetchProducts()));
  }, [dispatch]);
  

  return (
    <div>
      {/* <Navbar /> */}
      <div className="m-[32px] shadow-lg rounded-[20px] w-[877px] h-[348px] p-[32px]">
        <div className="flex justify-between">
          <div>
            <h2 className="font-popines text-[20px]">Today’s Sales</h2>
            <p className="font-popines text-[16px] font-normal text-[#737791]">
              Sales Summery
            </p>
          </div>
          <div>
            <button className="border rounded-[8px] py-[10px] px-[16px] border-[#C3D3E2] font-popines">
              Export
            </button>
          </div>
        </div>
        {/* desh 2 nd elements */}
        <div className="grid grid-cols-4 gap-[30px]">
          {/* sales */}
          <div className="mt-[43px]">
            <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
              <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
                <MdAnalytics className="text-[#FFFFFF]" />
              </div>
              <p className="font-popines text-[24px]">{products.length}</p>
              <p className="font-popines text-[16px] text-[#425166]">
                Total Sales
              </p>
              <p className="font-popines text-[12px] text-[#4079ED]">
                +8% from yesterday
              </p>
            </div>
          </div>
          {/* orders */}
          <div className="mt-[43px]">
            <div className="bg-[#FFF4DE] p-[20px] rounded-[16px]">
              <div className="bg-[#FF947A] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
                <LuNotebookText className="text-[#FFFFFF]" />
              </div>
              <p className="font-popines text-[24px]">300</p>
              <p className="font-popines text-[16px] text-[#425166]">
                Total Order
              </p>
              <p className="font-popines text-[12px] text-[#4079ED]">
                +5% from yesterday
              </p>
            </div>
          </div>
          {/* sold */}
          <div className="mt-[43px]">
            <div className="bg-[#DCFCE7] p-[20px] rounded-[16px]">
              <div className="bg-[#3CD856] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
                <CiShoppingTag className="text-[#FFFFFF]" />
              </div>
              <p className="font-popines text-[24px]">5</p>
              <p className="font-popines text-[16px] text-[#425166]">
                Product Sold
              </p>
              <p className="font-popines text-[12px] text-[#4079ED]">
                +1.2% from yesterday
              </p>
            </div>
          </div>
          {/* customers */}
          <div className="mt-[43px]">
            <div className="bg-[#F3E8FF] p-[20px] rounded-[16px]">
              <div className="bg-[#BF83FF] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
                <IoMdPersonAdd className="text-[#FFFFFF]" />
              </div>
              <p className="font-popines text-[24px]">8</p>
              <p className="font-popines text-[16px] text-[#425166]">
                New Customers
              </p>
              <p className="font-popines text-[12px] text-[#4079ED]">
                +8% from yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* dash top element */}

      {/* top products */}
      <div className="shadow-lg rounded-[20px] p-[32px] m-[32px] w-[645px] h-[351px]">
        <h2 className="font-popines text-[20px]">Top Products</h2>
        <table>
          <thead className="text-[#96A5B8] font-popines text-[13px]">
            <td className="m-[46px]">#</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Sales</td>
          </thead>
          <tbody>
            <tr>
              <td className="m-[46px]">1</td>
              <td>Home Decor Range</td>
              <td>Home Decor Range</td>
              <td>Home Decor Range</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <CardDash />
      <CardDash />
      <CardDash />
      <CardDash /> */}
    </div>
  );
};

export default Dashboard;
