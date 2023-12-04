import React, { useState, useEffect } from "react";
import ExpenseTable from "./ExpenseTable";
import "./ExpenseApp.css";

const ExpenseApp = () => {
  const [expenses, setExpenses] = useState([]);
  const [fetchExpensesFailed, setFetchExpensesFailed] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://expenses-backend-mu.vercel.app/expenses",
          {
            headers: {
              "Content-Type": "application/json",
              Username: "thomas.dalbert",
            },
          },
        );
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        setFetchExpensesFailed(true);
      }
    }
    fetchData();
  }, []);

  if (fetchExpensesFailed) {
    return (
      <p className="expense-error-message">
        Oops! We were to retrieve remote expense data! Please refresh or try
        again later.
      </p>
    );
  }

  return (
    <div className="expense-container">
      <h1 className="expense-header">Expenses</h1>
      {expenses.length > 0 ? (
        <ExpenseTable expenses={expenses} />
      ) : (
        <p className="expense-empty-message">No expenses found.</p>
      )}
    </div>
  );
};

export default ExpenseApp;
