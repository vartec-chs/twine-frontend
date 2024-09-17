import { Button } from '@/components/ui/button'

import { type FCWithClassName } from '@/types/general'

import { CircleUserRound, Search } from 'lucide-react'

import { cn } from '@/lib/utils'

export const ChatHeader: FCWithClassName = ({ className }) => {
	return (
		<div className={cn('flex w-full items-center justify-between border-b p-2', className)}>
			<div className='flex items-center gap-2'>
				<CircleUserRound className='h-12 w-12' />
				<div className='flex h-full flex-col justify-between'>
					<h1 className='text-md'>User nick name</h1>
					<p className='text-sm text-gray-500'>User status</p>
				</div>
			</div>

			<div>
				<Button variant='ghost' size='sm'>
					<Search className='h-5 w-5' />
				</Button>
			</div>
		</div>
	)
}
