import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthPage } from '@/pages/auth'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

import { paths } from '@/configs/paths'

import { MainLayout } from '../layouts/start-layout'

export const RoutersProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={paths.home} element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path={paths.auth.signIn} element={<AuthPage />} />
					<Route path={paths.auth.signUp} element={<AuthPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
