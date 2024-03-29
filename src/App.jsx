import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './lib/appRoutes'
import MainPage from './pages/MainPage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ExitPage from './pages/ExitAuthPage'
import { useState } from 'react'

function App() {



	const [userData, setUserData] = useState(null);
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route path={AppRoutes.MAIN} element={<MainPage />}>
					<Route path={AppRoutes.EXIT} element={<ExitPage setUserData={setUserData} />} />
				</Route>
			</Route>
			<Route path={AppRoutes.LOGIN} element={<LoginPage />} />
			<Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
			<Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
