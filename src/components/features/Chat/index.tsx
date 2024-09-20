

import { FCWithClassName } from '@/types/general'

import { ChatBody } from './chat-body'
import { ChatHeader } from './chat-header'
import { ChatInput } from './chat-input'
import { cn } from '@/lib/utils'

export const Chat: FCWithClassName = ({ className }) => {


	return (
		<section
			className={cn(
				'flex h-full w-full flex-col items-center rounded-r-2xl bg-zinc-100 dark:bg-zinc-900 max-lg:w-[40%] max-md:w-full max-md:rounded-none md:border md:border-l-0',
				className,
			)}
		>
			<ChatHeader />
			<ChatBody />
			<ChatInput />
		</section>
	)
}
