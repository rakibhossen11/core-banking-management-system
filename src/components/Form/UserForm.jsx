import React, { useState } from "react";
import Input from "../ui/Input";
import Swal from "sweetalert2";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [clientId,setClientId] = useState(Number);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, phone, email, password);
    const newUser = { clientId, name, phone, email, password };
    console.log(newUser);
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
        if (data.result) {
          Swal.fire({
            title: "Success!",
            text: "New User created successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      {/* <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Customer ID" />
          </div>
          <TextInput
            id=""
            type="number"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            placeholder="Set a client Id"
            required
          />
        </div> */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Your Name" />
          </div>
          <TextInput
            id=""
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Your Phone" />
          </div>
          <TextInput
            id=""
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Mobile Number"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="" value="Your email" />
          </div>
          <TextInput
            id=""
            type=""
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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default UserForm;
