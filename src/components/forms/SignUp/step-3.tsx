import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type SignUpFormValuesStep3, signUpFormSchemas } from '@/types/signUpForm'

import { Loader2 } from 'lucide-react'

import { useSignUpFormStore } from '@/store-hooks/useSignUpFormStore'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpStep3: FC = () => {
	const { updateFormData, nextStep, prevStep, formData } = useSignUpFormStore()
	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<SignUpFormValuesStep3>({
		resolver: zodResolver(signUpFormSchemas.step3),
		defaultValues: {
			nickname: formData.nickname,
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: SignUpFormValuesStep3) => {
		const nickname = data.nickname
		updateFormData({ nickname: data.nickname })

		setIsLoading(true)

		setTimeout(() => {
			setIsLoading(false)
			if (nickname === 'vartec') {
				form.setError('nickname', {
					type: 'custom',
					message: 'Никнейм не может быть vartec',
				})
				return
			} else {
				nextStep()
			}
		}, 2000)
	}

	return (
		<Form {...form}>
			<form
				className='flex w-full flex-col gap-2 rounded-xl'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='nickname'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ник</FormLabel>
							<FormControl>
								<Input placeholder='Ник' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='mt-2 flex w-full items-end gap-2'>
					<Button disabled={isLoading} variant='outline' onClick={prevStep}>
						Назад
					</Button>

					<Button disabled={isLoading} className='mt-2 w-full' type='submit'>
						{isLoading ? <Loader2 className='mr-2 h-6 w-6 animate-spin' /> : 'Далее'}
					</Button>
				</div>
			</form>
		</Form>
	)
}
