import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-item">
      {/* <h1 className='text-3xl'>Hello World</h1> */}
      <div>
        <div> {year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>

      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
