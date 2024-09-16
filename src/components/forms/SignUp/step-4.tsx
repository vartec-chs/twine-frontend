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
import { PasswordInput } from '@/components/ui/password-input'

import { type SignUpFormValuesStep4, signUpFormSchemas } from '@/types/signUpForm'

import { useSignUpFormStore } from '@/store-hooks/useSignUpFormStore'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpStep4: FC = () => {
	const { updateFormData, prevStep, formData } = useSignUpFormStore()

	const form = useForm<SignUpFormValuesStep4>({
		resolver: zodResolver(signUpFormSchemas.step4),
		defaultValues: {
			password: formData.password,
			confirmPassword: formData.confirmPassword,
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: SignUpFormValuesStep4) => {
		updateFormData({ password: data.password, confirmPassword: data.confirmPassword })
		console.log(formData)
	}

	return (
		<Form {...form}>
			<form
				className='flex w-full flex-col gap-2 rounded-xl'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<PasswordInput placeholder='Пароль' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				{form.watch('password').length > 3 && (
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Подтвердите пароль</FormLabel>
								<FormControl>
									<PasswordInput placeholder='Подтвердите пароль' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<div className='mt-2 flex w-full items-end gap-2'>
					<Button variant='outline' onClick={prevStep}>
						Назад
					</Button>

					<Button disabled={!form.formState.isValid} className='w-full' type='submit'>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</Form>
	)
}
