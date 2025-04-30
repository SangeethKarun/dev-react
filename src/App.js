import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Auth } from "./components/auth";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./config/firebase-config";
import { auth } from "./config/firebase-config";
// const preExpenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [expenses, setExpenses] = useState([]);
  const expenseCollection = collection(db, "Tasks");

  const getExpenseList = async () => {
    const data = await getDocs(expenseCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setExpenses(filteredData);
  };

  const ExpenseSubmitHandler = async (expenseItem) => {
    console.log(expenseItem);
    await addDoc(expenseCollection, {
      title: expenseItem.title,
      amount: expenseItem.amount,
      date: expenseItem.date,
    });
    await getExpenseList();
  };

  useEffect(() => {
    getExpenseList();
  }, []);

  return (
    <div>
      <Auth />
      {auth.currentUser && (
        <>
          <NewExpense OnExpenseSubmit={ExpenseSubmitHandler}></NewExpense>
          <Expenses expenseItems={expenses}></Expenses>
        </>
      )}
    </div>
  );
}

export default App;
