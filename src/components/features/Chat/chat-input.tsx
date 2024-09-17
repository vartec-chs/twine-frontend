import { AnimatePresence, motion } from 'framer-motion'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { type FCWithClassName } from '@/types/general'

import { Mic, Paperclip, SendHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'

export const ChatInput: FCWithClassName = ({ className }) => {
	const [text, setText] = useState('')

	return (
		<div className={cn('relative flex w-full items-center gap-2 border-t p-2', className)}>
			<Button className='rounded-lg' variant='ghost' size='icon'>
				<Paperclip className='h-5 w-5' />
			</Button>
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				wrap='soft'
				maxLength={2048}
				minLength={1}
				autoFocus
				autoCorrect='off'
				autoCapitalize='off'
				spellCheck='false'
				autoSave='off'
				datatype='text'
				aria-label='message'
				id='message'
				tabIndex={-1}
				role='textbox'
				aria-multiline='true'
				aria-activedescendant='message'
				aria-autocomplete='list'
				aria-controls='message'
				aria-expanded='false'
				aria-owns='message'
				aria-required='false'
				name='message'
				className='h-10 max-h-[15dvh] min-h-10 w-full rounded-md bg-transparent p-2 text-sm outline-none'
				placeholder='Сообщение'
			/>

			<AnimatePresence>
				<div className='relative h-full w-16'>
					{text.length > 0 ? (
						<motion.div
							className='active:animate-click m absolute right-0 top-auto'
							key='button1'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Button
								className='h-10 w-12 rounded-lg max-md:hover:bg-transparent'
								disabled={!text}
								variant={'ghost'}
								size='icon'
							>
								<SendHorizontal
									className={cn('h-6 w-6 text-gray-500 duration-300', text && 'text-blue-600')}
								/>
							</Button>
						</motion.div>
					) : (
						<motion.div
							className='absolute right-0 top-auto'
							key='button2'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Button
								className='active:animate-click h-10 w-12 rounded-lg max-md:hover:bg-transparent'
								disabled={!!text}
								variant={'ghost'}
								size='icon'
							>
								<Mic
									className={cn('h-6 w-6 text-gray-500 duration-300', text && 'text-blue-600')}
								/>
							</Button>
						</motion.div>
					)}
				</div>
			</AnimatePresence>
		</div>
	)
}
