import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './lib/appRoutes'
import MainPage from './pages/MainPage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import CardPage from './pages/CardPage'
import ExitPage from './pages/ExitAuthPage'
import { useState } from 'react'

function App() {
	
	const[userData, setUserData] = useState(null);
	return (
		<Routes>
			<Route element={<PrivateRoute user={userData} />}>
				<Route path={AppRoutes.MAIN} element={<MainPage userData={userData} />}>
					<Route path={`${AppRoutes.CARD}/:cardId`} element={<CardPage />} />
					<Route path={AppRoutes.EXIT} element={<ExitPage />} />
				</Route>
			</Route>
			<Route path={AppRoutes.LOGIN} element={<LoginPage setUserData={setUserData} />} />
			<Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
			<Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
