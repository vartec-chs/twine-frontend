import { AnimatePresence, motion } from 'framer-motion'

import { useIsMobile } from '@/hooks/use-is-mobile'

import { type FCWithCAndCN } from '@/types/general'

const routeVariantsLeft = {
	initial: {
		x: '100vw',
	},
	final: {
		x: '0vw',
		transition: {
			type: 'spring',
			mass: 0.4,
		},
	},
}

const routeVariantsRight = {
	initial: {
		x: '-100vw',
	},
	final: {
		x: '0vw',
		transition: {
			type: 'spring',
			mass: 0.4,
		},
	},
}

type AnimationPageDivProps = {
	as?: 'section' | 'div'
	isDisabled?: boolean
	isLeftAnimation?: boolean
}

export const AnimationPageDiv: FCWithCAndCN<AnimationPageDivProps> = ({
	className,
	children,
	as: Comp = 'div',
	isDisabled = false,
	isLeftAnimation = false,
	...props
}) => {
	const isMobile = useIsMobile()

	if (!isMobile || isDisabled) {
		return <Comp className={className}>{children}</Comp>
	}

	if (Comp === 'section') {
		return (
			<AnimatePresence>
				<motion.section
					variants={isLeftAnimation ? routeVariantsLeft : routeVariantsRight}
					initial='initial'
					animate='final'
					className={className}
					{...props}
				>
					{children}
				</motion.section>
			</AnimatePresence>
		)
	}

	return (
		<AnimatePresence>
			<motion.div
				variants={isLeftAnimation ? routeVariantsLeft : routeVariantsRight}
				initial='initial'
				animate='final'
				className={className}
				{...props}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
