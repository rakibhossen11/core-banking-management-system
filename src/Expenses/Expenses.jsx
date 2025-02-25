import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { featchExpenses } from "../redux/feature/expensesSlice";
import AddExpenses from "./AddExpenses";

const Expenses = () => {
    const dispatch = useDispatch();
    const { expenses, loading, error } = useSelector((state) => state.expenses);
    console.log(expenses);

    useEffect(() =>{
        dispatch(featchExpenses());
    },[]);

  return (
    <div>
      <Link to={"/addExpenses"}>
        <Button pill>Add New</Button>
      </Link>
      <AddExpenses />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp._id}>
              <td>{exp.type}</td>
              <td>${exp.amaount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
