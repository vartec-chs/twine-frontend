import type { FCWithChildren } from '@/types/general'

import { StartHeader } from './start-header'
import { cn } from '@/lib/utils'

type Props = { isCentered?: boolean; isHeightFull?: boolean }

export const StartLayout: FCWithChildren<Props> = ({ children, isCentered, isHeightFull }) => {
	return (
		<>
			<StartHeader />
			<main
				className={cn('container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4', {
					'items-center justify-center': isCentered,
					'h-[calc(100dvh-128px)] pb-[64px] max-sm:pb-0': isHeightFull,
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
				<span>© 2024 Twine</span>
			</footer>
		</>
	)
}
