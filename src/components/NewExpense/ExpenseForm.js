import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // const [enterTitle, setEnteredTitle]   = useState('');
  //   const [enterAmount, setEnteredAmount]   = useState('');
  //   const [enterDate, setEnteredDate]   = useState('');
  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: " ",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);

    setUserInput((prevState) => {
      return { ...prevState, enterTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enterAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enterDate: event.target.value };
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
    // for pass data up
    props.onSaveExpenseData(userInput);

    setUserInput({ enterTitle: "", enterAmount: "", enterDate: " " });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enterDate}
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
