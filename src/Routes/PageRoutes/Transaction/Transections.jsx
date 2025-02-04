import React, { useState } from "react";
import TransectionForm from "./TransectionForm";
import TransectionHistory from "./TransectionHistory";

const Transections = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [transection, setTransection] = useState([]); // Transection history

  // handle deposit and withdraw
  const handleTrasection = (type, amount) => {
    if(type === "deposit"){
        setBalance(balance + amount);
    }else if(type === "withdraw"){
        if(amount > balance){
            alert("Insufficiant fund!");
            return;
        }
        setBalance(balance - amount);
    }

    // add traeaction history
    setTransection([
        ...transection,
        {
            id: Date.now(),
            type,
            amount,
            date: new Date().toLocaleString(),
        }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Banking System</h1>
        {/* Display Balance */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Account Balance</h2>
          <p className="text-2xl">${balance.toFixed(2)}</p>
        </div>
        {/* Transaction Form */}
        <TransectionForm onTransaction={handleTrasection} />

        {/* Transaction History */}
        <TransectionHistory transactions={transection} />
      </div>
    </div>
  );
};

export default Transections;
