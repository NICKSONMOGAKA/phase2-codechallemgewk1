import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;