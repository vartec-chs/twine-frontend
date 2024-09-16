import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { router } from '@/configs/routes'

import { ThemeProvider } from './components/provider/theme-provider'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='system' storageKey='twine-theme'>
		<ToastContainer />
		<RouterProvider router={router} />
	</ThemeProvider>,
)
