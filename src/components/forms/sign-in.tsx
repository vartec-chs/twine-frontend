import { z } from 'zod'

import { type FC, useState } from 'react'
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
import { PasswordInput } from '@/components/ui/password-input'

import { Loader2 } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'

const signInFormSchema = z.object({
	login: z.string().min(3, 'Минимальная длина 3').max(32, 'Максимальная длина 32'),
	password: z.string().min(6, 'Минимальная длина пароля 6').max(128, 'Слишком длинный пароль'),
})

export const SignInForm: FC = () => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			login: '',
			password: '',
		},
	})

	const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
		setIsLoading(true)
		const isLoginEmail =
			!data.login.startsWith('@') && data.login.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

		if (!isLoginEmail) {
			data.login = !data.login.startsWith('@') ? `@${data.login}` : data.login
		}
	}

	return (
		<Form {...form}>
			<form
				className='flex w-full flex-col gap-2 rounded-xl'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='login'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ник/Email</FormLabel>
							<FormControl>
								<Input placeholder='Ник/Email' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
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
				{form.formState.isValid && (
					<Button disabled={isLoading} className='mt-2 w-full' type='submit'>
						{isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : 'Войти'}
					</Button>
				)}
			</form>
		</Form>
	)
}
