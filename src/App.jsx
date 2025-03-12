import { useState } from 'react'
import './style/glob.scss'
import './style/title.scss'
import './style/grid.scss'


function Headline({ children }) {
	return (
		<h1 class="title">{ children }</h1>
	);
}

function SubHeadline({ children }) {
	return (
		<h2 class="title">{ children }</h2>
	);
}

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="layout">
			<div></div>
			<div>
				<Headline>Tatiane Alves Moribe</Headline>
			</div>
			<div>
				<SubHeadline>Fashion Designer, Costumer, Stylist, Artist</SubHeadline>
			</div>
			<div>
				4
			</div>
		</div>
	)
}

export default App
