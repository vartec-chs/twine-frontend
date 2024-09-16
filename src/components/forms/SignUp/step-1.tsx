import { type FC } from 'react'
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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { type SignUpFormValuesStep1, signUpFormSchemas } from '@/types/signUpForm'

import { useSignUpFormStore } from '@/store-hooks/useSignUpFormStore'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpStep1: FC = () => {
	const { updateFormData, nextStep, formData } = useSignUpFormStore()
	const form = useForm<SignUpFormValuesStep1>({
		resolver: zodResolver(signUpFormSchemas.step1),
		defaultValues: {
			firstName: formData.firstName,
			lastName: formData.lastName,
			birthDay: formData.birthDay,
			birthMonth: formData.birthMonth,
			birthYear: formData.birthYear,
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: SignUpFormValuesStep1) => {
		let birthDate

		try {
			birthDate = new Date(
				Number(data.birthYear),
				Number(data.birthMonth) - 1,
				Number(data.birthDay),
			).toLocaleDateString()
		} catch {
			toast.error('Некорректная дата рождения!')
			return
		}

		updateFormData({
			lastName: data.lastName,
			firstName: data.firstName,
			birthDate,
			birthDay: data.birthDay,
			birthMonth: data.birthMonth,
			birthYear: data.birthYear,
		})
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
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя</FormLabel>
							<FormControl>
								<Input placeholder='Имя' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Фамилия</FormLabel>
							<FormControl>
								<Input placeholder='Фамилия' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex w-full items-end gap-2'>
					<FormField
						control={form.control}
						name='birthDay'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Дата рождения</FormLabel>
								<FormControl>
									<Input placeholder='День' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='birthMonth'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel> </FormLabel>
								<FormControl>
									<Select value={field.value} onValueChange={field.onChange}>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Месяц' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Месяц</SelectLabel>
												<SelectItem value='1'>Январь</SelectItem>
												<SelectItem value='2'>Февраль</SelectItem>
												<SelectItem value='3'>Март</SelectItem>
												<SelectItem value='4'>Апрель</SelectItem>
												<SelectItem value='5'>Май</SelectItem>
												<SelectItem value='6'>Июнь</SelectItem>
												<SelectItem value='7'>Июль</SelectItem>
												<SelectItem value='8'>Август</SelectItem>
												<SelectItem value='9'>Сентябрь</SelectItem>
												<SelectItem value='10'>Октябрь</SelectItem>
												<SelectItem value='11'>Ноябрь</SelectItem>
												<SelectItem value='12'>Декабрь</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='birthYear'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Год</FormLabel>
								<FormControl>
									<Input placeholder='Год' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{form.formState.isValid && (
					<Button disabled={!form.formState.isValid} className='mt-2 w-full' type='submit'>
						Далее
					</Button>
				)}
			</form>
		</Form>
	)
}
