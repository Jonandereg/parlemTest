import React, { useState } from 'react';
import './App.css';
import { getCustomer } from './Services/apiClient';
import Search from './components/Search';
import CustomerInfo from './components/CustomerInfo';

function App () {
  const [customer, setCustomer] = useState();

  async function handleSubmit (e, id) {
    e.preventDefault();
    const serveCustomer = await getCustomer({ customerId: Number(id) });
    setCustomer(serveCustomer);
  }
  return (
    <div className="App">
      <Search handleSubmit={handleSubmit} />
      <CustomerInfo customer={customer} />
    </div>
  );
}

export default App;
