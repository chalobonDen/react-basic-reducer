import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState, useEffect, useReducer } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';

function App() {
  const design = { color: 'red', textAlign: 'center', fontSize: '1.5rem' };
  const initData = [];
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const onAddNewItem = (newItem) => {
    setItems((preveItem) => {
      return [newItem, ...preveItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((amount) => amount > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((amount) => amount < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  // reducer state
  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return setShowReport(true);
      case 'HIDE':
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        {showReport && <ReportComponent formatNumber={formatNumber} />}
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction data={items} formatNumber={formatNumber} />

        <div>
          <h1>{result}</h1>
          <button onClick={() => dispatch({ type: 'SHOW' })}>Show</button>
          <button onClick={() => dispatch({ type: 'HIDE' })}>Hide</button>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
