import { type FCWithClassName } from '@/types/general'

import { cn } from '@/lib/utils'

export const ChatInput: FCWithClassName = ({ className }) => {
	return <div className={cn('w-full border-t p-2', className)}>Chat Input</div>
}
