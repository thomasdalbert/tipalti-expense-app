import React from "react";
import ExpenseRow from "./ExpenseRow";
import "./ExpenseTable.css";

const ExpenseTable = ({ expenses }) => {
  return (
    <table className="expense-table">
      <thead className="expense-table-header">
        <tr>
          <th className="expense-table-header-cell">Date</th>
          <th className="expense-table-header-cell">Merchant</th>
          <th className="expense-table-header-cell">Amount</th>
          <th className="expense-table-header-cell">Category</th>
          <th className="expense-table-header-cell">Description</th>
          <th className="expense-table-header-cell">Status</th>
        </tr>
      </thead>
      <tbody className="expense-table-body">
        {expenses.map((expense) => (
          <ExpenseRow key={expense.id} {...expense} />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
