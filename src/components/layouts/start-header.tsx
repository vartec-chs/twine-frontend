import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { paths } from '@/configs/paths'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '../provider/theme-provider'
import { Logo } from '../shared/logo'
import { Button } from '../ui/button'

export const StartHeader: FC = () => {
	const { setTheme, theme } = useTheme()

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

				<Button
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					variant='ghost'
					size='icon'
				>
					{theme === 'dark' ? <Sun /> : <Moon />}
				</Button>
			</div>
		</header>
	)
}
