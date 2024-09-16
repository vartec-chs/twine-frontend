import { z } from 'zod'

const step1 = z
	.object({
		firstName: z.string().min(1, 'Имя обязательно'),
		lastName: z.string().min(1, 'Фамилия обязательно'),
		birthDay: z.string().min(1, 'День рождения обязателен').max(2, 'Длина даты 2'),
		birthMonth: z.string().min(1, 'Месяц рождения обязателен').max(2, 'Длина месяца 2'),
		birthYear: z.string().min(4, 'Год рождения обязателен').max(4, 'Длина года 4'),
	})
	.refine((data) => Number(data.birthDay) >= 1 && Number(data.birthDay) <= 31, {
		message: 'Некорректная дата',
		path: ['birthDay'],
	})

const step2 = z.object({
	phone: z
		.string()
		.regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Некорректный номер телефона'),
	email: z.string().email('Некорректная почта'),
})

const step3 = z.object({
	nickname: z
		.string()
		.min(3, 'Минимальная длина 3')
		.max(32, 'Максимальная длина 32')
		.regex(/^[a-z0-9][a-z0-9_-]*[a-z0-9]$/, 'Некорректное имя пользователя'),
})

const step4 = z
	.object({
		password: z.string().min(6, 'Минимальная длина пароля 6').max(128, 'Слишком длинный пароль'),
		confirmPassword: z
			.string()
			.min(6, 'Минимальная длина пароля 6')
			.max(128, 'Слишком длинный пароль'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export const signUpFormSchemas = {
	step1,
	step2,
	step3,
	step4,
}

export type SignUpFormValuesStep1 = z.infer<typeof signUpFormSchemas.step1>
export type SignUpFormValuesStep2 = z.infer<typeof signUpFormSchemas.step2>
export type SignUpFormValuesStep3 = z.infer<typeof signUpFormSchemas.step3>
export type SignUpFormValuesStep4 = z.infer<typeof signUpFormSchemas.step4>
