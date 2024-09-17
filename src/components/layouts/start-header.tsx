import { type FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Link } from 'react-router-dom'

import { paths } from '@/configs/paths'

import { Moon, Sun } from 'lucide-react'


import { Logo } from '../shared/logo'
import { Button } from '../ui/button'

export const StartHeader: FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const ref = useRef(null)

	const toggleDarkMode = async (isDarkMode: boolean) => {
		if (
			!ref.current ||
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			setIsDarkMode(isDarkMode)
			return
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				setIsDarkMode(isDarkMode)
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
		} else {
			document.documentElement.classList.remove('dark')
		}
		// }, 1000)
	}, [isDarkMode])

	return (
		<header className='h-16 w-full'>
			<div className='container mx-auto flex max-w-6xl items-center justify-between px-4 py-1'>
				<div className='flex items-center gap-2'>
					<Logo className='h-12 w-12' />
					<h1 className='text-3xl font-bold'>
						<Link to={paths.home} className='text-3xl font-bold'>
							Twine
						</Link>
					</h1>
				</div>

				<Button ref={ref} onClick={() => toggleDarkMode(!isDarkMode)} variant='ghost' size='icon'>
					{isDarkMode ? <Sun /> : <Moon />}
				</Button>
			</div>
		</header>
	)
}
