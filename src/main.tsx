import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { RoutersProvider } from '@/components/provider/routers-provider'
import { ThemeProvider } from '@/components/provider/theme-provider'

import './index.css'

const App = () => {
	return (
		<ThemeProvider defaultTheme='system' storageKey='twine-theme'>
			<ToastContainer theme='colored' />
			<RoutersProvider />
		</ThemeProvider>
	)
}

createRoot(document.getElementById('root')!).render(<App />)
