import React, { useState } from "react";
import Input from "../ui/Input";
import Swal from "sweetalert2";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    console.log(name, email, phone, password);
    const newUser = { name, email, phone, password };
    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      }
    );
  };

  return (
    <div>
        <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
        <h1> Please Signup For Access </h1>
      <Input
        label="Name"
        name="Name"
        value={name}
        type=""
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        label="Email"
        name="Email"
        value={email}
        type=""
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        label="Phone Number"
        name="Phone Number"
        value={phone}
        type=""
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
      />
      <Input
        label="Password"
        name="Password"
        value={password}
        type=""
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        type="submit"
        className="w-full mt-5 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Create Account
      </button>
    </form>
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
        <h1> Please Signup For Access </h1>
      <Input
        label="Name"
        name="Name"
        value={name}
        type=""
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        label="Email"
        name="Email"
        value={email}
        type=""
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        label="Phone Number"
        name="Phone Number"
        value={phone}
        type=""
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
      />
      <Input
        label="Password"
        name="Password"
        value={password}
        type=""
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        type="submit"
        className="w-full mt-5 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
    </div>
  );
};

export default UserForm;
