import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React ,{useState} from 'react';
function ExpenseItem(props){

    // let title=props.title;
    // const clickHandler=()=>{
    //     // alert('clicked');
    //     title="new Title..";
    //     console.log(title);--the value is getting changes but not being reflected on the page which we can use by doc.getelementbyid but why we use react then for simplifying things
    // }
    // const [newTitle,setNewTitle]=useState("");
    // const [title,setTitle]=useState(props.title)
    // const clickHandler=()=>{
    //     setTitle("new Title");
    // }
    // const changeHandler=(event)=>{
    //     setNewTitle(event.target.value);//value update
    // }
    return(
        <Card className='expense-item'>
            {/* <ExpenseDate date={props.date}/> */}
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                     <div className='expense-item__price'>$200</div>
                     {/* <input type="text" value={newTitle} onChange={changeHandler}/>
                     <button onClick={clickHandler} >Change Title</button> */}
                </div>
         </Card>
    )
}

export default ExpenseItem;         