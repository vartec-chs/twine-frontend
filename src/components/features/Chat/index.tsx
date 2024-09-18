import { useState } from 'react'

import { FCWithClassName } from '@/types/general'

import { ChatBody } from './chat-body'
import { ChatHeader } from './chat-header'
import { ChatInput } from './chat-input'
import { cn } from '@/lib/utils'

export const Chat: FCWithClassName = ({ className }) => {
	const [touchStart, setTouchStart] = useState(null)
	const [touchEnd, setTouchEnd] = useState(null)

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 50

	const onTouchStart = (e: any) => {
		setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
		setTouchStart(e.targetTouches[0].clientX)
	}

	const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance
		if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
		// add your conditional logic here
	}

	return (
		<section
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
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
