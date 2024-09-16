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

import { type SignUpFormValuesStep2, signUpFormSchemas } from '@/types/signUpForm'

import { useSignUpFormStore } from '@/store-hooks/useSignUpFormStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { PhoneInput } from '@/components/ui/phone-input'

export const SignUpStep2: FC = () => {
	const { updateFormData, nextStep, prevStep, formData } = useSignUpFormStore()
	const form = useForm<SignUpFormValuesStep2>({
		resolver: zodResolver(signUpFormSchemas.step2),
		defaultValues: {
			email: formData.email,
			phone: formData.phone,
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: SignUpFormValuesStep2) => {
		updateFormData({ email: data.email, phone: data.phone })
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
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='Email' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Номер</FormLabel>
							<FormControl>
								<PhoneInput placeholder='Номер' {...field} />
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
