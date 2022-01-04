import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedValue) => {
    setFilterYear(selectedValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
