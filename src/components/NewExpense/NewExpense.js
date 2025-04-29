import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

function NewExpense(props){
    const SubmitExpenseHandler=(expenseItem)=>{
        props.OnExpenseSubmit(expenseItem)
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={SubmitExpenseHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense