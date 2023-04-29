import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const saveExpenseFromParent=(entererdExpenseData)=>{
        const expenseData={
            ...entererdExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseFromParent} />
        </div>
    );
}
export default NewExpense;