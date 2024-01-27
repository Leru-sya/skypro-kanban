import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
// import PopBrowse from '../components/PopBrowse/PopBrowse'
// import PopExit from '../components/PopExit/PopExit'
import PopNewCard from '../components/PopNewCard/PopNewCard'
import Wrapper from '../components/Wrapper/Wrapper'
import { cardList } from '../data'
import { GlobalStyle } from '../Global.styled'
import "../App.css"
import { Outlet } from 'react-router-dom'

export default function MainPage() {
	const [cards, setCards] = useState(cardList);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])

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

	return (<>
		<GlobalStyle />
		<Wrapper>
			<Outlet />
			<PopNewCard />
			<Outlet />
			<Header addCard={addCard} />
			<Main isLoading={isLoading} cardList={cards} />
		</Wrapper>
	</>)
}