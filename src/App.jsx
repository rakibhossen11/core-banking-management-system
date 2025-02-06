import React from 'react';
import Profile from './Routes/PageRoutes/ProfilePage/Profile';
import TransectionForm from './Routes/PageRoutes/Transaction/TransectionForm';
import Transections from './Routes/PageRoutes/Transaction/Transections';
import FinancialTables from './redux/Tables/FinancialTables';

function App() {
  

  return (
    <>
     <Profile />
     {/* <Transections /> */}
     <FinancialTables />
    </>
  )
}

export default App
