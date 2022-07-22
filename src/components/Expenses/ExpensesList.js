import React from "react";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.amount}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return;
};

export default ExpensesList;
