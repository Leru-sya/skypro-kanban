import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './lib/appRoutes'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

function App() {
	let user = true;
	return (
		<Routes>
			<Route element={<PrivateRoute user={user} />}>
				<Route path={AppRoutes.MAIN} element={<MainPage />} />
			</Route>
			<Route path={AppRoutes.LOGIN} element={<LoginPage />} />
			<Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
			<Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
