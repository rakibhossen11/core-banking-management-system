import React, { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../redux/feature/customerSlice";
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.customers);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your form submission logic here (e.g., API call)
    dispatch(addCustomer(formData))
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Customer added successfully!",
          confirmButtonText: "OK",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          country: "",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message || "Failed to add customer",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Add Customer</h2>

          {/* Name */}
          <div className="mb-4">
            <Label htmlFor="name" value="Name" />
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              // required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <Label htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1234567890"
              value={formData.phone}
              onChange={handleChange}
              // required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <Label htmlFor="address" value="Address" />
            <TextInput
              id="address"
              name="address"
              type="text"
              placeholder="123 Main St"
              value={formData.address}
              onChange={handleChange}
              // required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <Label htmlFor="city" value="City" />
            <TextInput
              id="city"
              name="city"
              type="text"
              placeholder="New York"
              value={formData.city}
              onChange={handleChange}
              // required
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <Label htmlFor="state" value="State" />
            <TextInput
              id="state"
              name="state"
              type="text"
              placeholder="NY"
              value={formData.state}
              onChange={handleChange}
              // required
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <Label htmlFor="country" value="Country" />
            <TextInput
              id="country"
              name="country"
              type="text"
              placeholder="USA"
              value={formData.country}
              onChange={handleChange}
              // required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="w-full">
              Add Customer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
