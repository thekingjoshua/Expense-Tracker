import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import { useState } from 'react';
function Expenses(props) {
	console.log(props);
	return (
		<Card className="expenses">
			{props.item.map(expense => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					id={expense.id}
					item={props.item}
				/>
			))}
		</Card>
	);
}

export default Expenses;
