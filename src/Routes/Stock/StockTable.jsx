import React from 'react';
import { useSelector } from 'react-redux';
import StockInForm from './StockInForm';
import Table from '../../components/ui/Table';

const StockTable = () => {
    const products = useSelector((state) => state.product.products);
    console.log(products);
    return (
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Stock List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Stock List</h2>
          <StockInForm />
        </div>
      </div>
    </div>
    );
};

export default StockTable;