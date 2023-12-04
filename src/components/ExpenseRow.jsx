import React from "react";
import "./ExpenseRow.css";

const ExpenseRow = ({
  date,
  merchant,
  amount,
  category,
  description,
  status,
}) => {
  return (
    <tr className="expense-row">
      <td className="expense-row-cell">{date}</td>
      <td className="expense-row-cell">{merchant}</td>
      <td className="expense-row-cell">{amount}</td>
      <td className="expense-row-cell">{category}</td>
      <td className="expense-row-cell">{description}</td>
      <td className="expense-row-cell">{status}</td>
    </tr>
  );
};

export default ExpenseRow;
