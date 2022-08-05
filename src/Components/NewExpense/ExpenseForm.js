import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    //Method 1
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    //Method 2
    //const [userInput, setUserInput] = useState({
    //    enteredTitle:'',
    //    enteredAmount:'',
    //    enteredDate:''
    //});

    //document.getElementById('').addEventListener('click,' (event) => {})
    const titleChangeHandler = (event) => {
        //Method 1
        setEnteredTitle(event.target.value);

        //Method 2
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value,
        //});

        //Method 3
        //setUserInput((prevState) => {
        //    return{
        //        ...prevState,
        //        enteredTitle: event.target.value,
        //    };
        //});
    };

    const amountChangeHandler = (event) => {
        //Method 1
        setEnteredAmount(event.target.value);
        
        //Method 2
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value,
        //});
    };

    const dateChangeHandler = (event) => {
        
        //Method 1
        setEnteredDate(event.target.value);
        
        //Method 2
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value,
        //});
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2022-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;