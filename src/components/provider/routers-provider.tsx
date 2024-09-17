import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthPage } from '@/pages/auth'
import { ChatsPage } from '@/pages/chats'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

import { paths } from '@/configs/paths'

import { ChatsLayout } from '../layouts/ChatsLayout'
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

				<Route element={<ChatsLayout />}>
					<Route path={paths.chats} element={<ChatsPage />} />
					<Route path={paths.chat.withId(':id')} element={<ChatsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
