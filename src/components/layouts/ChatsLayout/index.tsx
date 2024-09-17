import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { useIsMobile } from '@/hooks/use-is-mobile'

import type { FCWithChildren } from '@/types/general'

import { ChatsHeader } from './header'
import { cn } from '@/lib/utils'

const Layout: FCWithChildren = ({ children }) => {
	const isMobile = useIsMobile()

	return (
		<>
			{!isMobile && <ChatsHeader />}
			<main
				className={cn(
					'container mx-auto flex h-[calc(100dvh-64px)] max-w-6xl flex-row py-0 md:h-[calc(100dvh-72px)] md:px-4',
					isMobile && 'h-dvh',
				)}
			>
				{children}
			</main>
		</>
	)
}

export const ChatsLayout: FC = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}
