import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_data = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.65,
    date: new Date(2021, 12, 31),
  },
  {
    id: "e2",
    title: "Car Insurance2",
    amount: 194.65,
    date: new Date(2021, 10, 31),
  },
  {
    id: "e3",
    title: "Car Insurance3",
    amount: 27.65,
    date: new Date(2021, 11, 12),
  },
  {
    id: "e4",
    title: "Car Insurance4",
    amount: 69.65,
    date: new Date(2021, 7, 12),
  },
  {
    id: "e5",
    title: "Car Insurance4",
    amount: 97.15,
    date: new Date(2022, 1, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_data);
  const SaveExpenseDataHandler = (edata) => {
    setExpenses(prevExpense => {
      return [edata, ...prevExpense];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={SaveExpenseDataHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
