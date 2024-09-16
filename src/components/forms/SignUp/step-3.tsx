import { type FC } from 'react'
import { useForm } from 'react-hook-form'

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

import { useSignUpFormStore } from '@/store-hooks/useSignUpFormStore'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpStep3: FC = () => {
	const { updateFormData, nextStep, prevStep, formData } = useSignUpFormStore()
	const form = useForm<SignUpFormValuesStep3>({
		resolver: zodResolver(signUpFormSchemas.step3),
		defaultValues: {
			nickname: formData.nickname,
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: SignUpFormValuesStep3) => {
		updateFormData({ nickname: data.nickname })
		nextStep()
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
					<Button variant='outline' onClick={prevStep}>
						Назад
					</Button>

					<Button disabled={!form.formState.isValid} className='w-full' type='submit'>
						Далее
					</Button>
				</div>
			</form>
		</Form>
	)
}
