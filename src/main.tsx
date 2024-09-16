import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from '@/components/provider/theme-provider'

import { router } from '@/configs/routes'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='system' storageKey='twine-theme'>
		<ToastContainer theme='colored' />
		<RouterProvider router={router} />
	</ThemeProvider>,
)
