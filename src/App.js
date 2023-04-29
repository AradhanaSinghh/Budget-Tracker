import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
function App(props){
  let DUMMY_EXPENSES=[

    // {
    //   id:'e1',
    //   title:'school fee',
    //   amount: 250,
    //   date: new Date(2021,5,12)
    // },
    // {
    //   id:'e2',
    //   title:'tution fee',
    //   amount: 350,
    //   date: new Date(2021,5,13)
    // },
    // {
    //   id:'e3',
    //   title:'mess fee',
    //   amount: 550,
    //   date: new Date(2021,5,14)
    // },
    // {
    //   id:'e4',
    //   title:'extra fee',
    //   amount: 1250,
    //   date: new Date(2021,5,15)
    // }
  ];
  fetch('http://localhost/sample-api/api/read.php').then(
    response=>{
      return response.json();
    }
  ).then(
    data=>{
      console.log(data);
      setExpenses(data);
    }
  )
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler=(expense)=>{
    const updatedExpenses=[expense,...expenses];
    setExpenses(updatedExpenses);
  }
  //  let expenseDate=new Date(2021,3,28);
  // let expenseTitle="School Fee";
  // let expenseAmount=300;
    return(
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
         {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
         <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
         <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
         <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}></ExpenseItem> */}
         <Expenses item={expenses} />
      </div>
    );
}
export default App;