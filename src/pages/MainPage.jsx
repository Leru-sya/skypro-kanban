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
import { getTasks } from '../api'
import { useUser } from '../hooks/useUser'

export default function MainPage() {
	const { user } = useUser();
	const [cards, setCards] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [getCardsError, setGetCardsError] = useState(null);

	useEffect(() => {
		getTasks({ token: user.token })
			.then((data) => {
				setCards(data.tasks)
				console.log(data);
			})
			.catch((error) => {
				setGetCardsError(error.message)
			})
			.then(() => {
				setIsLoading(false)
			})
	}, [])

	function addCard() {
		setCards([
			...cards,
			{

				_id: cards.length + 1,

				topic: "Research",

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
			<Header addCard={addCard} user={user} />{getCardsError ? (<p style={{ color: "red" }}>{getCardsError}</p>) : (<Main isLoading={isLoading} cardList={cards} />)}
		</Wrapper>
	</>)
}