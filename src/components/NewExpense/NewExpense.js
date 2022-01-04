import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const SaveExpenseDataHandler = (edata) => {
    const expenseData = {
      ...edata,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
