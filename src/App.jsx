import './App.css'
import CurrencyInput from "./CurrencyInput.jsx";
import {useState} from "react";

function App() {
	const [amount1, setAmount1] = useState(1);
	const [amount2, setAmount2] = useState(1);
	const [currency1, setCurrency1] = useState('USD');
	const [currency2, setCurrency2] = useState("USD");

	const baseURl = 'https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI'

	return (
		<div>
			<CurrencyInput currencies={['USD']} amount={amount1} currency={currency1}/>
			<CurrencyInput currencies={['USD']} amount={amount2} currency={currency2}/>
		</div>
	)
}

export default App
