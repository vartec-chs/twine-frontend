import { AnimatePresence, motion } from 'framer-motion'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { FCWithClassName } from '@/types/general'

import { SearchChatsInput } from './search-chats-input'
import { UserCard } from './user-card'
import { cn } from '@/lib/utils'
import { useInfiniteScroll, useList } from '@siberiacancode/reactuse'
import { Loader2 } from 'lucide-react'


type User = {
	id: string
	avatar?: string
	nickName: string
	lastMessage?: string
	lastMessageTime?: string
	countUnreadMessages?: number
}

const users: User[] = []

for (let i = 0; i < 15; i++) {
	users.push({
		id: i.toString(),
		nickName: 'User',
		lastMessage: 'Hello',
		lastMessageTime: '10:00',
		countUnreadMessages: Math.floor(Math.random() * 10),
	})
}

export const UserList: FCWithClassName = ({ className }) => {
	const listUsers = useList(users)
	const infiniteScroll = useInfiniteScroll<HTMLDivElement>(
		async () => {
			await new Promise((resolve) => setTimeout(resolve, 600))
			const newUsers: User[] = []

			for (let i = listUsers.value.length; i < listUsers.value.length + 10; i++) {
				newUsers.push({
					id: i.toString(),
					nickName: 'User',
					lastMessage: 'Hello',
					lastMessageTime: '10:00',
					countUnreadMessages: Math.floor(Math.random() * 10),
				})
			}

			listUsers.set((prev) => [...prev, ...newUsers])
		},
		{ distance: 10, },
	)

	return (
		<section
			className={cn(
				'w-[35%] rounded-l-2xl bg-zinc-100 p-2 dark:bg-zinc-900 max-lg:w-[40%] max-md:w-full max-md:rounded-none md:border',
				className,
			)}
		>
			<SearchChatsInput />

			<ScrollArea className='mt-2 h-[90%]' ref={infiniteScroll.ref}>
				<div className='flex h-full flex-col gap-1'>
					<AnimatePresence>
						{listUsers.value.map((user, index) => (
							<motion.div
								key={index}
								layout
								initial={{ opacity: 0, height: 0, x: -100, scale: 0.8 }}
								animate={{ opacity: 1, height: 'auto', x: 0, scale: 1 }}
								exit={{ opacity: 0, height: 0, x: +100, scale: 0.8 }}
								transition={{ duration: 0.08, delay: index <= 20 ? index * 0.05 : 0.5 }}
							>
								<UserCard {...user} />
							</motion.div>
						))}
						{infiniteScroll.isLoading && (
						<div className='mb-2 flex w-full items-center justify-center'>
							<Loader2 className='animate-spin' />
						</div>
					)}
					</AnimatePresence>
				</div>

				<ScrollBar orientation='vertical' />
			</ScrollArea>
		</section>
	)
}
