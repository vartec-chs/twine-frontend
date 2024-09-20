import { useNavigate } from 'react-router-dom'

import { type FCWithClassName } from '@/types/general'

import { paths } from '@/configs/paths'

import { CircleUserRound } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = {
	id: string
	avatar?: string
	nickName: string
	lastMessage?: string
	lastMessageTime?: string
	countUnreadMessages?: number
}

export const UserCard: FCWithClassName<Props> = ({ className, ...props }) => {
	const navigate = useNavigate()
	const { id, avatar, nickName, lastMessage, lastMessageTime, countUnreadMessages } = props

	return (
		<div
			onClick={() => navigate(paths.chat.withId(id))}
			className={cn(
				'flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 duration-200 hover:bg-zinc-200 active:scale-95 active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700',
				className,
			)}
		>
			{!avatar && <CircleUserRound className='h-12 w-12' />}
			<div className='flex h-full w-[90%] flex-col justify-between'>
				<div className='flex flex-row items-center justify-between gap-2'>
					<h1 className='text-md'>{nickName ? nickName : '...'}</h1>

					<span className='text-sm text-muted-foreground'>
						{lastMessageTime ? lastMessageTime : '...'}
					</span>
				</div>

				<div className='flex flex-row items-center justify-between gap-2'>
					<p className='line-clamp-1 break-words text-sm text-gray-500'>
						{lastMessage ? lastMessage : '...'}
					</p>
					{Boolean(countUnreadMessages) && (
						<div className='mx-1 flex flex-row items-center gap-2 rounded-md bg-primary px-1'>
							<span className='text-sm text-white'>{countUnreadMessages}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
