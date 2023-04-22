import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
	const regex = /(?=.)/gm;

	const [text,setText] = useState('');
	const [numToAdd,setNumToAdd] = useState(0);
	const [spoofedText,setSpoofedText] = useState('');

	const spoof = e => {
		e.preventDefault();
		
		setSpoofedText(`${text}${' ⠀'.repeat(numToAdd)}`);
	};

	return (
		<div className="App">
			<form onSubmit={spoof}>
				<textarea placeholder="Text to be obfuscated..." id="text-field" onChange={(e) => setText(e.target.value)} value={text} />
				<input type="number" onChange={(e) => setNumToAdd(e.target.value)} value={numToAdd} />
				<input type="submit" />
			</form>
			<textarea placeholder="result" readonly value={spoofedText} />
		</div>
	);
}

export default App;
