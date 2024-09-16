import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { StartLayout } from '@/components/layouts/start-layout'
import { Logo } from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { paths } from '@/configs/paths'

import welcomeIllustrationDark from '@/assets/illustrations/welcome-dark.svg'
import welcomeIllustration from '@/assets/illustrations/welcome.svg'

export const Home: FC = () => {
	return (
		<StartLayout isCentered isHeightFull>
			<div className='flex w-full flex-row items-center justify-center gap-12 max-sm:mt-8 max-sm:flex-col max-sm:gap-2'>
				<img
					src={welcomeIllustration}
					alt=''
					className='h-[20dvh] w-[20dvw] dark:hidden max-sm:h-[20dvh] max-sm:w-[60dvw]'
				/>

				<img
					src={welcomeIllustrationDark}
					alt=''
					className='hidden h-[20dvh] w-[20dvw] dark:block max-sm:h-[20dvh] max-sm:w-[60dvw]'
				/>

				<div className='flex w-full max-w-[400px] gap-2 rounded-2xl border p-2 max-sm:flex-col'>
					<div className='flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-100 p-4 dark:bg-zinc-900 max-sm:h-[25dvh]'>
						<Logo className='h-12 w-12' />
						<h2 className='text-3xl font-bold'>Twine</h2>
						<span className='text-sm font-medium text-slate-500'>Добро пожаловать!</span>
					</div>

					<div className='flex w-full flex-col items-center justify-center gap-2 max-sm:h-[30dvh]'>
						<Button asChild>
							<Link to={paths.auth.signIn}>Войти</Link>
						</Button>

						<div className='flex flex-row items-center justify-center gap-2'>
							<Separator />
							<span className='text-sm'>или</span>
							<Separator />
						</div>

						<Button variant='ghost' asChild>
							<Link to={paths.auth.signUp}>Зарегистрироваться</Link>
						</Button>
					</div>
				</div>
			</div>
		</StartLayout>
	)
}
