import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {deposit,withdraw} from "../../../redux/feature/bankingSlice";

const TransectionForm = ({ onTransaction }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(type, amount);
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (type === "deposit") {
      dispatch(deposit(parseFloat(amount)));
    } else if (type === "withdraw") {
      dispatch(withdraw(parseFloat(amount)));
    }
    setAmount("");
    // onTransaction(type, parseFloat(amount));
    // setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="">
          Amonut
        </label>
        <input
          placeholder="Enter amount"
          type="number"
          className="w-full p-2 border rounded-lg"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="w-full p-2 border rounded-lg"
        >
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        {type === "deposit" ? "Deposit" : "Withdraw"}
      </button>
    </form>
  );
};

export default TransectionForm;
