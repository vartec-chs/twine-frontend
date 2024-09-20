import { AnimatePresence, motion } from 'framer-motion'

import { useRef, useState } from 'react'

import { Button } from '@/components/ui/button'

import { useAutosizeTextArea } from '@/hooks/use-autosize-text-area'

import { type FCWithClassName } from '@/types/general'

import { Mic, Paperclip, SendHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { FilePicker } from '@/components/shared/file-picker'

export const ChatInput: FCWithClassName = ({ className }) => {
	const [text, setText] = useState('')
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	useAutosizeTextArea(textAreaRef.current, text)

	return (
		<div className={cn('relative flex w-full items-center border-t p-2', className)}>
			<FilePicker />
			<textarea
				ref={textAreaRef}
				value={text}
				onChange={(e) => setText(e.target.value)}
				wrap='soft'
				rows={1}
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
				className='scrollbar-thumb-zinc-300 scrollbar-track-zinc-100 scrollbar-thin dark:scrollbar-thumb-zinc-700 dark:scrollbar-track-zinc-900 scrollbar-thumb-rounded min-h-9 max-h-[18dvh]  w-full resize-none rounded-md bg-transparent p-2 text-sm outline-none'
				placeholder='Сообщение'
			/>

			<AnimatePresence>
				<div className='relative flex h-full w-16 items-center justify-center'>
					{text.length > 0 ? (
						<motion.div
							className='m absolute right-0 top-auto active:animate-click'
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
								className='h-10 w-12 rounded-lg active:animate-click max-md:hover:bg-transparent'
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
