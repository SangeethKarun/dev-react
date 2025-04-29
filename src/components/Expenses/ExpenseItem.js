import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.expitem.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expitem.title}</h2>
                <div className="expense-item__price">{props.expitem.amount} $</div>
            </div>
        </div>
    )
}

export default ExpenseItem