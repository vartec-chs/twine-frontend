import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '@/components/shared/logo'
import { ToggleThemeButton } from '@/components/shared/toggle-theme'
import { Button } from '@/components/ui/button'

import { paths } from '@/configs/paths'

export const ChatsHeader: FC = () => {
	return (
		<header className='h-16 w-full'>
			<div className='h-full container mx-auto flex max-w-6xl items-center justify-between px-4 max-md:bg-primary'>
				<div className='hidden items-center gap-2 md:flex'>
					<Logo className='h-12 w-12' />
					<h1 className='text-3xl font-bold'>
						<Link to={paths.home} className='text-3xl font-bold'>
							Twine
						</Link>
					</h1>
				</div>

				<nav className='flex items-center gap-4'>
					<Button variant='outline' color='secondary' size='sm'>
						чат
					</Button>
				</nav>

				<ToggleThemeButton />
			</div>
		</header>
	)
}
