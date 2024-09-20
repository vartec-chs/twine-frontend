import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { useConfirm } from '@/components/ui/confirm-dialog'

export const TestPage: FC = () => {
	const confirm = useConfirm()

	const handleClick = async () => {
		const isConfirmed = await confirm({
			title: 'Удаление',
			description: 'Вы действительно хотите удалить этот элемент?',
			confirmText: 'Да',
			cancelText: 'Нет',
		})

		if (isConfirmed) {
			console.log('Confirmed')
		}
	}

	return <Button onClick={handleClick}>Delete</Button>
}
