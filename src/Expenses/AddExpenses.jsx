import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addExpenses } from "../redux/feature/expensesSlice";
import Swal from "sweetalert2";

const AddExpenses = () => {
    const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [amaount, setAmaont] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(type, amaount);
    const expense = {type,amaount};
    // dispatch(addExpenses(expense));
    const result = await dispatch(addExpenses(expense));
    console.log('result',result);
    if (result.payload && result.payload.acknowledged) {
        Swal.fire({
          title: 'Success!',
          text: 'Expense added successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add expense.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4"
    >
      <h2 className="text-2xl font-bold mb-6"></h2>

      {/* Products select name */}
      <div className="mb-4">
        <TextInput
          label="Product Name"
          name="Product Name"
          value={type}
          type=""
          onChange={(e) => setType(e.target.value)}
          placeholder="Product Name"
        />
      </div>
      <TextInput
        label="Uniq Id"
        name="Uniq Id"
        value={amaount}
        type="number"
        onChange={(e) => setAmaont(e.target.value)}
        placeholder="Set a Uniq Id"
      />
      <Button
        type="submit"
      >
        Add Expenses
      </Button>
    </form>
  );
};

export default AddExpenses;
