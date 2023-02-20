import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Data Subscription',
		amount: new Intl.NumberFormat().format(5000),
		date: new Date(2023, 0, 10),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: new Intl.NumberFormat().format(150000),
		date: new Date(2023, 0, 15),
	},
	{
		id: 'e3',
		title: 'Books',
		amount: new Intl.NumberFormat().format(1500),
		date: new Date(2023, 1, 1),
	},
	{
		id: 'e4',
		title: 'Headphones',
		amount: new Intl.NumberFormat().format(15000),
		date: new Date(2023, 1, 10),
	},
];
function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = addExpenseData => {
		setExpenses(prevExpenses => {
			const data = [addExpenseData, ...prevExpenses];
			console.log(data);
			return [addExpenseData, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense addExpense={addExpenseHandler} />
			<Expenses item={expenses} />
		</div>
	);
}
export default App;
