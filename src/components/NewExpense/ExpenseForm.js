import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmt, setEnteredAmt] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const changeTitleHandler = ({ target }) => {
		setEnteredTitle(target.value);
	};
	const changeAmtHandler = ({ target }) => {
		setEnteredAmt(Number(target.value));
	};
	const changeDateHandler = ({ target }) => {
		setEnteredDate(target.value);
	};
	const submitHandler = e => {
		e.preventDefault();
		// creating an object for the data recieved from the input field
		const expenseData = {
			title: enteredTitle,
			amount: new Intl.NumberFormat('en-US').format(enteredAmt),
			date: new Date(`${enteredDate} 00:00:00`),
		};
		props.onSaveExpenseData(expenseData);
		// resetting the values of input fields
		setEnteredTitle('');
		setEnteredAmt('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" value={enteredTitle} onChange={changeTitleHandler} />
				</div>
				<div className="new-expense__control">
					<label htmlFor="amt">Amount</label>
					<input
						type="number"
						value={enteredAmt}
						onChange={changeAmtHandler}
						id="amt"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						value={enteredDate}
						onChange={changeDateHandler}
						id="date"
						min="2020-01-01"
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
