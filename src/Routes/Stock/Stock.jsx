import React from "react";

const Stock = () => {
  const investments = [
    {
      id: 201,
      userId: 1,
      type: "Gp",
      amount: 3000.0,
      roi: 50,
      date: "2024-01-15",
    },
    {
      id: 202,
      userId: 2,
      type: "Bl",
      amount: 1500.0,
      roi: 10.1,
      date: "2024-01-20",
    },
    {
      id: 203,
      userId: 3,
      type: "Robi",
      amount: 5000.0,
      roi: 7.5,
      date: "2024-01-25",
    },
    {
      id: 204,
      userId: 3,
      type: "Airtel",
      amount: 5000.0,
      roi: 7.5,
      date: "2024-01-25",
    },
  ];
  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-4">Investments</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Stock ID</th>
            <th className="p-2">Stock Name</th>
            <th className="p-2">Type</th>
            <th className="p-2">Stock Amount</th>
            <th className="p-2">Stock Pcs</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((inv) => (
            <tr key={inv.id} className="border-t">
              <td className="p-2 text-center">{inv.id}</td>
              <td className="p-2 text-center">{inv.userId}</td>
              <td className="p-2 text-center">{inv.type}</td>
              <td className="p-2 text-right">{inv.amount.toFixed(2)}</td>
              <td className="p-2 text-right">{inv.roi.toFixed(1)}</td>
              <td className="p-2 text-center">{inv.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
