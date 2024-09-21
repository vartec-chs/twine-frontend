import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { paths } from '@/configs/paths'

import { Logo } from '../shared/logo'
import { ToggleThemeButton } from '../shared/toggle-theme'

export const StartHeader: FC = () => {
	return (
		<header className='h-16 w-full'>
			<div className='container h-full mx-auto flex max-w-6xl items-center justify-between px-4 py-1'>
				<div className='flex items-center gap-2'>
					<Logo className='h-12 w-12' />
					<h1 className='text-3xl font-bold'>
						<Link to={paths.home} className='text-3xl font-bold'>
							Twine
						</Link>
					</h1>
				</div>
				<ToggleThemeButton />
			</div>
		</header>
	)
}
