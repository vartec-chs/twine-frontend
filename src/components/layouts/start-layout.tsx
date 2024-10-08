import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import type { FCWithChildren } from '@/types/general'

import { StartHeader } from './start-header'
import { cn } from '@/lib/utils'

type Props = { isCentered?: boolean; isHeightFull?: boolean }

const Layout: FCWithChildren<Props> = ({ children, isCentered, isHeightFull }) => {
	return (
		<>
			<StartHeader />
			<main
				className={cn('container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4', {
					'items-center justify-center': isCentered,
					'h-[calc(100dvh-128px)] pb-4 max-sm:pb-10': isHeightFull,
				})}
			>
				{children}
			</main>
			<footer
				className={cn(
					'flex h-16 w-full items-center justify-center',
					!isHeightFull && 'fixed bottom-0',
				)}
			>
				<span className='text-sm text-slate-500'>© 2024 Twine</span>
			</footer>
		</>
	)
}

export const MainLayout: FC = () => {
	return (
		<Layout isCentered isHeightFull>
			<Outlet />
		</Layout>
	)
}
