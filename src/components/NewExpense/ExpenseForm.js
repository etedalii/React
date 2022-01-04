import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // const [enterTitle, setEnteredTitle]   = useState('');
  //   const [enterAmount, setEnteredAmount]   = useState('');
  //   const [enterDate, setEnteredDate]   = useState('');
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);

    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const expenseData = {
    //   title: enterTitle,
    //   amount: enterAmount,
    //   date: new Date(enterDate),
    // };

    console.log(userInput);
    userInput.date = new Date(userInput.date);
    // for pass data up
    props.onSaveExpenseData(userInput);

    setUserInput({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;