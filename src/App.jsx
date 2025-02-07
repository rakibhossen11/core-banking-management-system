import React from 'react';
import Profile from './Routes/PageRoutes/ProfilePage/Profile';
import TransectionForm from './Routes/PageRoutes/Transaction/TransectionForm';
import Transections from './Routes/PageRoutes/Transaction/Transections';
import FinancialTables from './redux/Tables/FinancialTables';
import Stock from './Routes/Stock/Stock';
import StockInForm from './Routes/Stock/StockInForm';
import { useDispatch } from 'react-redux';
import StockTable from './Routes/Stock/StockTable';

function App() {
  const dispatch = useDispatch();
  

  const handleSubmit = (e) =>{

  };

  return (
    <>
     <Profile />
     {/* <Transections /> */}
     <FinancialTables />
     <Stock />
     <StockInForm />
     <StockTable />
    </>
  )
}

export default App
