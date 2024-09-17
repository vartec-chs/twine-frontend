import { type FC, useState } from 'react'
import { useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '../provider/theme-provider'
import { Button } from '../ui/button'

export const ToggleThemeButton: FC = () => {
	const { theme, setTheme } = useTheme()

	const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')
	const ref = useRef(null)

	const toggleDarkMode = async (isDarkMode: boolean) => {
		if (
			!ref.current ||
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			setIsDarkMode(isDarkMode)
			// setTheme(theme === 'dark' ? 'dark' : 'light')
			return
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				setIsDarkMode(isDarkMode)
				// setTheme(theme === 'dark' ? 'dark' : 'light')
			})
		}).ready

		// @ts-ignore
		const { top, left, width, height } = ref.current.getBoundingClientRect()
		const x = left + width / 2
		const y = top + height / 2
		const right = window.innerWidth - left
		const bottom = window.innerHeight - top
		const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom))

		document.documentElement.animate(
			{
				clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
			},
			{
				duration: 1000,
				easing: 'ease-in-out',
				pseudoElement: '::view-transition-new(root)',
			},
		)
	}

	useEffect(() => {
		// setTimeout(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
			setTheme('dark')
		} else {
			document.documentElement.classList.remove('dark')
			setTheme('light')
		}
		// }, 1000)
	}, [isDarkMode])

	// useEffect(() => {
	// 	if (theme === 'dark') {
	// 		document.documentElement.classList.add('dark')
	// 	} else {
	// 		document.documentElement.classList.remove('dark')
	// 	}
	// }, [theme])

	return (
		<Button ref={ref} onClick={() => toggleDarkMode(!isDarkMode)} variant='ghost' size='icon'>
			{isDarkMode ? <Sun /> : <Moon />}
		</Button>
	)
}
