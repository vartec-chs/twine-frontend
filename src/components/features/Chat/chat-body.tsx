import { AnimatePresence, motion } from 'framer-motion'

import { useEffect } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

import { useInfiniteScroll } from '@/hooks/use-infinite-top-scroll'

import { type FCWithClassName } from '@/types/general'

import { Loader2 } from 'lucide-react'

import { ChatMessage } from './chat-message'
import { cn } from '@/lib/utils'
import { useList } from '@siberiacancode/reactuse'

const messagess: { message: string; time: string; isMe?: boolean }[] = []

for (let i = 0; i < 15; i++) {
	messagess.push({
		message: 'Hello',
		time: '10:00',
		isMe: Math.random() > 0.5,
	})
}

type Props = {
	messges?: { message: string; time: string; isMe?: boolean }[]
}

export const ChatBody: FCWithClassName<Props> = ({ className, messges }) => {
	const list = useList<{ message: string; time: string; isMe?: boolean }>(messagess)
	const infiniteScroll = useInfiniteScroll<HTMLDivElement>(
		async () => {
			await new Promise((resolve) => {
				setTimeout(resolve, 1000)
			})

			const messages: { message: string; time: string; isMe?: boolean }[] = []

			for (let i = 0; i < 10; i++) {
				messages.push({
					message: 'Hello' + '' + Math.random(),
					time: '10:00',
					isMe: Math.random() > 0.5,
				})
			}

			list.set((prev) => [...messages, ...prev])
		},
		{ distance: 10, direction: 'top' },
	)

	useEffect(() => {
		if (messges) {
			list.set((prev) => [...prev, ...messges])
			
		}
	}, [messges])

	return (
		<div className={cn('flex h-full w-full flex-col overflow-y-auto px-2', className)}>
			<ScrollArea ref={infiniteScroll.ref}>
				<div className='my-2 flex flex-col gap-2'>
					{infiniteScroll.isLoading && (
						<div className='mb-2 flex w-full items-center justify-center'>
							<Loader2 className='animate-spin' />
						</div>
					)}
					<AnimatePresence>
						{list.value.map((message, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.2 }}
								className='w-full'
							>
								<ChatMessage
									key={i}
									message={message.message}
									time={message.time}
									isMe={message.isMe}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</ScrollArea>
		</div>
	)
}
