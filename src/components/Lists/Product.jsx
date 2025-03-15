import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/productSlice";
import {
  Button,
  Label,
  Select,
  Table,
  Modal,
  TextInput,
  Checkbox,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { MdAnalytics } from "react-icons/md";
import { MdOutlineSell } from "react-icons/md";

const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  // console.log(products);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [openModal, setOpenModal] = useState(true);

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSell = (e) => {
    e.preventDefault();
    // console.log(uniqId, parseQuantity);
    // const quantity = parseInt(parseQuantity);
    // const sell = { uniqId, quantity };
    // console.log(sell);
    // dispatch(buyProduct(buy));
    // fetch("http://localhost:5000/products/sell", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(sell),
    // });
  };

  // const openModal = () => {
  //   setModalData("This is the data to be displayed in the modal.");
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Calculate total purchase price
  const totalPurchasePrice = products.reduce((total, product) => {
    return total + (product.purchasePrice * product.stockQuantity || 0); // Ensure purchasePrice is a number
  }, 0);
  console.log(totalPurchasePrice);

  // Calculate total purchase price
  const totalSellPrice = products.reduce((total, product) => {
    return total + (product.sellprice * product.stockQuantity || 0); // Ensure purchasePrice is a number
  }, 0);
  console.log(totalSellPrice);

  useEffect(() => {
    dispatch(fetchProducts());
    // console.log(dispatch(fetchProducts()));
  }, [dispatch]);

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div className="mt-[43px]">
          <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
            <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
              <MdAnalytics className="text-[#FFFFFF]" />
            </div>
            <p className="font-popines text-[24px]">{totalPurchasePrice}</p>
            <p className="font-popines text-[16px] text-[#425166]">
              Total Purchase
            </p>
            <p className="font-popines text-[12px] text-[#4079ED]">
              +8% from yesterday
            </p>
          </div>
        </div>
        <div className="mt-[43px]">
          <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
            <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
              <MdAnalytics className="text-[#FFFFFF]" />
            </div>
            <p className="font-popines text-[24px]">{totalSellPrice}</p>
            <p className="font-popines text-[16px] text-[#425166]">
              Estimated Sales
            </p>
            <p className="font-popines text-[12px] text-[#4079ED]">
              +8% from yesterday
            </p>
          </div>
        </div>
        <div className="mt-[43px]">
          <div className="bg-[#FFE2E5] p-[20px] rounded-[16px]">
            <div className="bg-[#FA5A7D] rounded-full p-[8px] h-[32px] w-[32px] mb-[16px]">
              <MdAnalytics className="text-[#FFFFFF]" />
            </div>
            <p className="font-popines text-[24px]">
              {totalSellPrice - totalPurchasePrice}
            </p>
            <p className="font-popines text-[16px] text-[#425166]">
              Estimated Reveneu
            </p>
            <p className="font-popines text-[12px] text-[#4079ED]">
              +8% from yesterday
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-2 items-center">
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label value="Sort By" />
          </div>
          <Select id="countries" required>
            <option>Product Id</option>
            <option>Date</option>
            <option>Name</option>
            <option>Stock</option>
            <option>Price</option>
          </Select>
        </div>

        <div className="">
          <Link to={`/addProducts`}>
            <Button>New Product</Button>
          </Link>
        </div>
      </div>
      <Table>
        <Table.Head>
          {[
            "Product ID",
            "Product Name",
            // "Category",
            "Stock Quantity",
            "Unit of Measure",
            "Price",
            // "Purchase Price",
            // "Selling Price",
            // "Sales Count",
            // "Stock In",
            // "Stock Out",
            // "Remarks / Notes",
            "Action",
          ].map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product, index) => (
            <Table.Row key={index}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.productId}
              </Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.stockQuantity}</Table.Cell>
              <Table.Cell>{product.unit}</Table.Cell>
              {/* <Table.Cell>
                {product.stockQuantity * product.purchasePrice}
              </Table.Cell> */}
              <Table.Cell>{product.sellprice}</Table.Cell>
              <Table.Cell>
                <div>
                  <ActionIcon
                    link={`/sell/${product._id}`}
                    Icon={MdOutlineSell}
                  />
                </div>
                {/* <Button onClick={() => setOpenModal(true)}>see</Button> */}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <div>
        <Table>
          <Table.Head>
            {[
              "Product ID",
              "Product Name",
              // "Category",
              "Stock Quantity",
              "Unit of Measure",
              "Supplier",
              // "Purchase Price",
              // "Selling Price",
              // "Sales Count",
              // "Stock In",
              // "Stock Out",
              // "Remarks / Notes",
              "Action",
            ].map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {products.map((product, index) => (
              <ProductList key={index} product={product}></ProductList>
            ))}
          </Table.Body>
        </Table>
      </div> */}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSell} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              You want to Buy Something
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="" value="You Chosse" />
              </div>
              <TextInput
                id=""
                // value={name}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="" value="You Choose" />
              </div>
              <TextInput
                id="id"
                type="number"
                // value={uniqId}
                //   onChange={(event) => setUniqId(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="" value="Purchece Quantity" />
              </div>
              <TextInput
                id="quantity"
                type="number"
                // value={parseQuantity}
                // onChange={(event) => setParseQuantity(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <Button color="failure" type="submit">
                Sell This Product
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default Product;

const ActionIcon = ({ name, Icon, link, isActive, onClick }) => {
  return (
    <div className="flex gap-[24px] mt-[48px]">
      <Link to={link}>
        <Icon className="h-[32px] w-[32px] text-[#737791]" />
        <p className="font-popines text-[#737791] text-[18px]">{name}</p>
      </Link>
    </div>
  );
};

const ModalPro = ({ isOpen, onClose, data }) => {
  // if (!isOpen) return null;

  return (
    <div>
      {/* <Modal show={openModal} size="md" onClose={onCloseModal} popup> */}
      <Modal show={isOpen} size="md" onClose={onclose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                // value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// http://localhost:5000/products/by-date?date=2025-02-28 this url for search product by the date
