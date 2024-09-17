import { AnimatePresence, motion } from 'framer-motion'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { FCWithClassName } from '@/types/general'

import { SearchChatsInput } from './search-chats-input'
import { UserCard } from './user-card'
import { cn } from '@/lib/utils'

export const UserList: FCWithClassName = ({ className }) => {
	return (
		<section
			className={cn(
				'w-[35%] rounded-l-2xl bg-zinc-100 p-2 dark:bg-zinc-900 max-lg:w-[40%] max-md:w-full max-md:rounded-none md:border',
				className,
			)}
		>
			<SearchChatsInput />

			<ScrollArea className='mt-2 h-[90%]'>
				<div className='flex h-full flex-col gap-1'>
					<AnimatePresence>
						{new Array(15).fill(0).map((_, index) => (
							<motion.div
								key={index}
								layout
								initial={{ opacity: 0, height: 0, y: -10, scale: 0.8 }}
								animate={{ opacity: 1, height: 'auto', y: 0, scale: 1 }}
								exit={{ opacity: 0, height: 0, y: 0, scale: 0.8 }}
								transition={{ duration: 0.2, delay: index * 0.05 }}
							>
								<UserCard />
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				<ScrollBar orientation='vertical' />
			</ScrollArea>
		</section>
	)
}
