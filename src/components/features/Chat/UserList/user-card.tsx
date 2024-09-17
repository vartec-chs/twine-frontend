import { type FCWithClassName } from '@/types/general'

import { CircleUserRound } from 'lucide-react'

import { cn } from '@/lib/utils'

export const UserCard: FCWithClassName = ({ className }) => {
	return (
		<div
			className={cn(
				'flex w-full cursor-pointer flex-row gap-2 rounded-lg border p-2 duration-200 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700',
				className,
			)}
		>
			<CircleUserRound className='h-12 w-12' />
			<div className='flex h-full w-[80%] flex-col justify-between'>
				<h1 className='text-md'>User nick name</h1>

				<div className='flex flex-row items-center justify-between gap-2'>
					<p className='line-clamp-1 break-words text-sm text-gray-500'>
						later message ffffffffffffffffffffffffffff ffffffffffff fff вввввв ввввввввв
					</p>
					<div className='mx-1 flex flex-row items-center gap-2 rounded-md bg-primary px-1'>
						<span className='text-sm text-white'>100</span>
					</div>
				</div>
			</div>
		</div>
	)
}
