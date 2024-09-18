import { type FC } from 'react'

import { cn } from '@/lib/utils'

type Props = {
	isMe?: boolean
	message?: string
	time?: string
}

export const ChatMessage: FC<Props> = ({ isMe, message, time }) => {
	return (
		<div
			className={cn('flex w-full flex-col items-start gap-2', isMe ? 'items-end' : 'items-start')}
		>
			<div
				className={cn(
					'flex w-fit max-w-[70%] max-md:max-w-[85%] items-end gap-2 rounded-lg p-2',
					isMe
						? 'rounded-br-none bg-primary text-white'
						: 'rounded-bl-none bg-zinc-200 dark:bg-zinc-800',
				)}
			>
				<p className='text-sm word-wrap break-all '>{message}</p>
				<p
					className={cn(
						'text-xs tracking-widest dark:text-muted-foreground',
						isMe ? 'text-right text-zinc-300 dark:text-zinc-200/80' : 'text-left text-zinc-500',
					)}
				>
					{time}
				</p>
			</div>
		</div>
	)
}
