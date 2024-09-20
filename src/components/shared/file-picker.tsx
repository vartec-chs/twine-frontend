import { useImperativeFilePicker } from 'use-file-picker'

import { useState } from 'react'
import { toast } from 'react-toastify'

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

import { FCWithClassName } from '@/types/general'

import { Loader2, Paperclip, Plus } from 'lucide-react'

import { Button } from '../ui/button'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { File } from './file'
import { useMediaQuery } from '@siberiacancode/reactuse'
import { FileAmountLimitValidator } from 'use-file-picker/validators'

type Props = {
	onSubmit?: (data: { files: File[] }) => void
	onClose?: () => void
}

export const FilePicker: FCWithClassName<Props> = ({ className, onSubmit, onClose }) => {
	const [open, setOpen] = useState(false)
	const isDesktop = useMediaQuery('(min-width: 768px)')
	const { openFilePicker, loading, clear, plainFiles, removeFileByIndex, errors } =
		useImperativeFilePicker({
			accept: '*',
			multiple: true,
			onFileRemoved: () => {
				if (plainFiles.length === 1) close()
			},
			validators: [new FileAmountLimitValidator({ min: 1, max: 10 })],
		})

	const close = () => {
		clear()
		setOpen(false)
		onClose?.()
	}

	const onSubmitHandler = () => {
		if (plainFiles.length <= 0) return toast.error('Добавьте хотя бы 1 файл')
		if (plainFiles.length > 10) return toast.error('Максимальное количество файлов 10')
		if (errors.length > 0) return toast.error('Загрузка файлов не удалась')
		const allSizes = plainFiles.map((file) => file.size)
		const totalSize = allSizes.reduce((a, b) => a + b, 0)
		if (totalSize > 600 * 1024 * 1024)
			return toast.error(
				'Максимальный размер файлов 600 МБ а у вас ' + Math.round(totalSize / 1024 / 1024) + ' МБ',
			)
		onSubmit?.({ files: plainFiles })
		close()
	}

	const handleOpenFilePicker = () => {
		clear()
		openFilePicker()
	}

	const content = loading ? (
		<div className='my-2 flex w-full items-center justify-center'>
			<Loader2 className='animate-spin' />
		</div>
	) : errors.length <= 0 ? (
		<ScrollArea className='max-h-[50vh] w-full overflow-auto scrollbar-thin'>
			<div className='flex flex-col gap-2'>
				{plainFiles.map((file, i) => (
					<File onRemove={() => removeFileByIndex(i)} key={i} file={file} />
				))}
			</div>
			<ScrollBar />
		</ScrollArea>
	) : (
		<div className='flex flex-col gap-2 p-2'>
			{errors.map((error, i) => (
				<p key={i}>{error.name}</p>
			))}
		</div>
	)

	const textDescription = (
		<div className='flex flex-row items-center justify-between gap-2 md:justify-normal'>
			<h1>
				{errors.length > 0
					? 'Файлы невалидны'
					: plainFiles.length > 0
						? 'Файлы выбраны'
						: 'Файлы не выбраны'}
			</h1>

			<Button disabled={errors.length > 0} onClick={openFilePicker} variant='ghost' size='icon'>
				<Plus className='h-5 w-5' />
			</Button>
		</div>
	)

	const buttonSave = !errors.length && plainFiles.length > 0 && (
		<Button onClick={onSubmitHandler}>Сохранить</Button>
	)

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={(open) => setOpen(open)}>
				<DialogTrigger asChild className={className}>
					<Button onClick={handleOpenFilePicker} className='rounded-lg' variant='ghost' size='icon'>
						<Paperclip className='h-5 w-5' />
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>{textDescription}</DialogTitle>
					</DialogHeader>
					{content}
					<DialogFooter>{buttonSave}</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={open} onOpenChange={(open) => setOpen(open)}>
			<DrawerTrigger asChild className={className}>
				<Button onClick={handleOpenFilePicker} className='rounded-lg' variant='ghost' size='icon'>
					<Paperclip className='h-5 w-5' />
				</Button>
			</DrawerTrigger>
			<DrawerContent className='border-none'>
				<DrawerHeader className='text-left'>
					<DrawerTitle>{textDescription}</DrawerTitle>
				</DrawerHeader>
				<div className='p-2'>{content}</div>
				<DrawerFooter className='pt-2'>
					{buttonSave}
					<DrawerClose asChild>
						<Button variant='outline'>Отмена</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
