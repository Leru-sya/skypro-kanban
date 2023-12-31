
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import Wrapper from './components/Wrapper/Wrapper'
import { cardList } from './data'

function App() {
	const [cards, setCards] = useState(cardList);
	const[isLoading, setIsLoading] = useState(true);

	useEffect(() => {
setTimeout(() => {
setIsLoading(false)
},1000)
	},[])

	function addCard() {
		setCards([
			...cards,
			{

				id: cards.length + 1,

				theme: "Research",

				title: "Новая задача",

				date: "30.10.23",

				status: "Без статуса",

			}
		])
	}

	return (<Wrapper>
		<PopExit />
		<PopNewCard />
		<PopBrowse />
		<Header addCard={addCard} />
		<Main isLoading={isLoading} cardList={cards} />
	</Wrapper>)
}

export default App
