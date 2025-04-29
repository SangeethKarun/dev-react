import {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props){
    const [enteredInput,setEnteredInput]=useState({enteredTitle:'',enteredAmount:'',enteredDate:''});
    const titleChangeHandler=(event)=>{    
        setEnteredInput({...enteredInput,enteredTitle:event.target.value})
    };
    const amountChangeHandler=(event)=>{    
        setEnteredInput({...enteredInput,enteredAmount:event.target.value})
    };
    const dateChangeHandler=(event)=>{    
        setEnteredInput({...enteredInput,enteredDate:event.target.value})
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: enteredInput.enteredTitle,
            amount: enteredInput.enteredAmount,
            date: new Date(enteredInput.enteredDate),
            id:Math.random().toString
        };
        //console.log(expenseData);
        props.onSubmitExpense(expenseData);
        setEnteredInput({enteredTitle:'',enteredAmount:'',enteredDate:''})
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' onChange={titleChangeHandler} value={enteredInput.enteredTitle}></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' onChange={amountChangeHandler} value={enteredInput.enteredAmount}></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' onChange={dateChangeHandler} value={enteredInput.enteredDate}></input>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm