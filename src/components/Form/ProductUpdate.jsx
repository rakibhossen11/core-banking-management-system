import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Input from '../ui/Input';
import InputSelect from '../ui/InputSelect';

const ProductUpdate = () => {
    const {uniqId} = useParams(); // Get the productId from the URL
    console.log(uniqId);
    const product = useSelector((state) => state.product.products.find((p) => p.uniqId === parseInt(uniqId)));
    console.log(product);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(uniqId);
    }

    return (
        <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Update Product</h2>

      {/* Products select name */}
      <div className="mb-4">
        <Input
        label="Product Name"
        name="Product Name"
        value={product.name}
        type=""
        // onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        />
        {/* <InputSelect
          label="Select a Product"
          id="product"
          options={products}
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
      </div>
      <Input
        label="Uniq Id"
        name="Uniq Id"
        value={product.uniqId}
        type="number"
        // onChange={(e) => setuniqId(e.target.value)}
        placeholder="Set a Uniq Id"
      />
      <Input
        label="Supplier"
        name="Supplier"
        value={product.supplier}
        type=""
        // onChange={(e) => setSupplier(e.target.value)}
        placeholder="Supplier "
      />
      <Input
        label="Purchase Price"
        name="Purchase Price"
        value={product.purchasePrice}
        type="number"
        // onChange={(e) => setpurchasePrice(e.target.value)}
        placeholder="Purchase Price"
      />
      <Input
        label="Selling Price"
        name="Selling Price"
        value={product.sellprice}
        type="number"
        // onChange={(e) => setsellPrice(e.target.value)}
        placeholder="Selling Price"
      />
      <Input
        label="Category"
        name="Category"
        value={product.category}
        type=""
        // onChange={(e) => setCategory(e.target.value)}
        placeholder="Set a Category"
      />
      {/* <InputSelect
          label="Select a Unit"
          id="Unit"
        //   options={products}
        //   value={name}
        //   onChange={(e) => setUnit(e.target.value)}
        /> */}
      {/* <Input
        label="Unit"
        name="Unit"
        value={unit}
        type="number"
        onChange={(e) => setUnit(e.target.value)}
        placeholder="Unit"
      /> */}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Update Product
      </button>
    </form>
    );
};

export default ProductUpdate;