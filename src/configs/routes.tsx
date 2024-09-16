import { createBrowserRouter } from 'react-router-dom'

import { AuthPage } from '@/pages/auth'
import { Home } from '@/pages/home'

import { paths } from './paths'

export const router = createBrowserRouter([
	{ path: paths.home, element: <Home /> },
	{
		path: paths.auth.signIn,
		element: <AuthPage />,
	},
	{ path: paths.auth.signUp, element: <AuthPage /> },
	{ path: '*', element: <Home /> },
])
