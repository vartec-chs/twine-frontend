import { useState } from 'react'

type UseSwipeProps = {
	minSwipeDistance?: number
	onLeftSwipe?: () => void
	onRightSwipe?: () => void
}

export const useSwipe = ({ onLeftSwipe, onRightSwipe, minSwipeDistance = 100 }: UseSwipeProps) => {
	const [touchStart, setTouchStart] = useState(null)
	const [touchEnd, setTouchEnd] = useState(null)

	const onTouchStart = (e: any) => {
		setTouchEnd(null)
		setTouchStart(e.targetTouches[0].clientX)
	}

	const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance

		if (isLeftSwipe) onLeftSwipe?.()
		if (isRightSwipe) onRightSwipe?.()
	}

	return {
		onTouchStart,
		onTouchMove,
		onTouchEnd,
	}
}
