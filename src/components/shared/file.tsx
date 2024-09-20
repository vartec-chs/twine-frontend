import { type FCWithClassName } from '@/types/general'

import { FileIcon, X } from 'lucide-react'

import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = {
	file: File
	onRemove?: () => void
}

export const File: FCWithClassName<Props> = ({ className, file, onRemove }) => {
	return (
		<div
			className={cn(
				'flex w-full items-center justify-between gap-2 rounded-lg border p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800',
				className,
			)}
		>
			<div>
				{file.type.startsWith('image') ? (
					<img className='h-12 w-12' src={URL.createObjectURL(file)} alt={file.name} />
				) : (
					<FileIcon className='h-12 w-12' />
				)}
			</div>

			<div className='ml-2 flex flex-col'>
				<h1 className='line-clamp-1 break-all text-sm font-semibold'>{file.name}</h1>
				<p className='text-sm text-gray-500'>{getFileSize(file)}</p>
			</div>

			<Button onClick={onRemove} variant='ghost' size='sm'>
				<X className='h-4 w-4' />
			</Button>
		</div>
	)
}

const getFileSize = (file: File) => {
	const bytes = file.size
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (bytes === 0) return 'n/a'
	const i = Math.floor(Math.log(bytes) / Math.log(1024))
	if (i === 0) return `${bytes} ${sizes[i]}`
	return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`
}
