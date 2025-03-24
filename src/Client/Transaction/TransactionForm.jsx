import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addTransaction } from "../../redux/feature/bankingSlice";
import Swal from "sweetalert2";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("credit");
  const [parseamount, setParseAmaont] = useState("");
  const [description, setDescription] = useState("");
  const data = useLoaderData();
  const customerId = data.customerId;
  //   console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(parseamount);
    const transaction = { customerId, type, amount, description };
    console.log(transaction);
    // console.log(dispatch(addTransaction(transaction)));
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Transaction added successfully!",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message || "Failed to add Transaction",
          confirmButtonText: "OK",
        });
      });

    // fetch("http://localhost:5000/customers/transaction", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(transaction),
    //   });
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label value="Select Transaction Type" />
        </div>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id=""
          required
        >
          <option value="withdraw">Withdraw</option>
          <option value="deposit">Deposit</option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Amaount" />
        </div>
        <TextInput
          id=""
          type="number"
          onChange={(e) => setParseAmaont(e.target.value)}
          placeholder="Amaount"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Trasaction Description" />
        </div>
        <TextInput
          id=""
          type=""
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Trasaction Description"
        />
      </div>
      <Button type="submit">Transaction</Button>
    </form>
  );
};

export default TransactionForm;
