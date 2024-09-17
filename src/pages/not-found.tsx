import { motion } from 'framer-motion'

import { type FC } from 'react'
import { Link } from 'react-router-dom'


import { Button } from '@/components/ui/button'

import { paths } from '@/configs/paths'

export const NotFoundPage: FC = () => {
	return (
	
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			className='flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-2xl'
		>
			<h1 className='text-3xl font-bold'>Страница не найдена</h1>
			<Button asChild variant='outline'>
				<Link to={paths.home}>Вернуться на главную</Link>
			</Button>
		</motion.div>
		
	)
}
