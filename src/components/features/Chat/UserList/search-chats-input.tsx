import { AnimatePresence, motion } from 'framer-motion'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { FCWithClassName } from '@/types/general'

import { Search, X } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = {
	onChange?: (value: string) => void
}

export const SearchChatsInput: FCWithClassName<Props> = ({ className, onChange }) => {
	const [searchValue, setSearchValue] = useState('')
	const [focused, setFocused] = useState(false)

	return (
		<div
			className={cn(
				'flex w-full items-center gap-2 rounded-md border px-2 py-1 max-md:py-1.5',
				className,
			)}
		>
			<Search className='h-5 w-5 shrink-0 opacity-50' />

			<input
				value={searchValue}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onChange={(e) => {
					setSearchValue(e.target.value)
					onChange?.(e.target.value)
				}}
				type='text'
				placeholder='Поиск'
				className='w-full border-none bg-transparent outline-none placeholder:text-sm placeholder:text-foreground/50'
			/>

			<AnimatePresence>
				{focused && searchValue && (
					<motion.div
						layout
						initial={{ opacity: 0, height: 0, y: -10, scale: 0.9 }}
						animate={{ opacity: 1, height: 'auto', y: 0, scale: 1 }}
						exit={{ opacity: 0, height: 0, y: +10, scale: 0.9 }}
						transition={{ duration: 0.2 }}
						className='flex items-center'
					>
						<Button
							variant='ghost'
							size='sm'
							className='h-5 w-5 p-0'
							onClick={() => setSearchValue('')}
						>
							<X className='h-5 w-5' />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
