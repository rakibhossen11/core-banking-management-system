import React, { useState } from "react";
import Input from "../ui/Input";
import Swal from "sweetalert2";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(email, password);
    const newUser = { email, password };
    fetch("http://localhost:5000/register", { 
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
        });
    // const newUser = { name, email, phone, password };
    // console.log(newUser);
    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Coffee added successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@inventory.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <Button type="submit">Sign In</Button>
      </form>
      {/* <form
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
      <Button type="submit">Submit</Button>
    </form> */}
    </div>
  );
};

export default UserForm;
