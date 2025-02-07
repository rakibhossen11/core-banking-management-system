import React from 'react';
import { useSelector } from 'react-redux';
import StockInForm from './StockInForm';

const StockTable = () => {
    const stocks = useSelector((state) => state.stock.stocks);
    return (
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Stock Form */}
        <StockInForm />

        {/* Stock List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Stock List</h2>
          {stocks.length === 0 ? (
            <p className="text-gray-500">No stock items available.</p>
          ) : (
            <ul className="space-y-4">
              {stocks.map((stock) => (
                <li key={stock.id} className="p-4 bg-white rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{stock.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {stock.quantity} | Price: ${stock.price.toFixed(2)}
                      </p>
                    </div>
                    <StockInForm stockToUpdate={stock} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    );
};

export default StockTable;