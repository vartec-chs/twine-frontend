import { useNavigate } from 'react-router-dom'

import { AnimationPageDiv } from '@/components/layouts/animation-page-div'

import { useSwipe } from '@/hooks/use-swipe'

import { FCWithClassName } from '@/types/general'

import { paths } from '@/configs/paths'

import { ChatBody } from './chat-body'
import { ChatHeader } from './chat-header'
import { ChatInput } from './chat-input'
import { cn } from '@/lib/utils'

export const Chat: FCWithClassName = ({ className }) => {
	const navigate = useNavigate()
	const swipe = useSwipe({ onRightSwipe: () => navigate(paths.chats) })

	return (
		<AnimationPageDiv
			as='section'
			isLeftAnimation
			{...swipe}
			className={cn(
				'flex h-full w-full flex-col items-center rounded-r-2xl bg-zinc-100 dark:bg-zinc-900 max-md:w-full max-md:rounded-none md:border md:border-l-0',
				className,
			)}
		>
			<ChatHeader />
			<ChatBody />
			<ChatInput />
		</AnimationPageDiv>
	)
}
