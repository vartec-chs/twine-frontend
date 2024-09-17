import { type FCWithClassName } from '@/types/general'

import { cn } from '@/lib/utils'

export const ChatBody: FCWithClassName = ({ className }) => {
	return <div className={cn('h-full w-full p-2', className)}>Chat Body</div>
}
