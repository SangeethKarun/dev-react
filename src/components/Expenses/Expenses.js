import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2022);

  const filteredExpenses = props.expenseItems?.filter((exp) => {
    return true;
  });

  const FilterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onFilterChange={FilterChangeHandler}></ExpensesFilter>
        {filteredExpenses?.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses?.map((expitem) => (
            <ExpenseItem expitem={expitem} key={expitem.id}></ExpenseItem>
          ))
        )}
      </div>
    </div>
  );
}

export default Expenses;
