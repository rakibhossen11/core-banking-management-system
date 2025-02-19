import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const newUser = { email, password };
    fetch("http://localhost:5000/login", { 
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
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
