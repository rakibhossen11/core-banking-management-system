import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addTransaction } from "../../redux/feature/bankingSlice";

const TransactionForm = () => {
    const dispatch = useDispatch();
  const [type, setType] = useState("credit");
  const [parseamount, setParseAmaont] = useState("");
  const [description, setDescription] = useState("");
  const data = useLoaderData();
  const clientId = data.clientId;
//   console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(parseamount);
    const transaction = {clientId, type, amount, description};
    console.log(transaction);
    // console.log(dispatch(addTransaction(transaction)));
    // dispatch(addTransaction(transaction));
    
    fetch("http://localhost:5000/users/transaction", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
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
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
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
