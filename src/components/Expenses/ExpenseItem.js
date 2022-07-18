import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clicked = () => { 
    console.log('button clicked') 
  }
  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clicked} > click me </button>
    </Card>
  
  );
};

export default ExpenseItem;
