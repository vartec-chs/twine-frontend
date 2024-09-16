import { type FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { SignUpForm } from '@/components/forms/SignUp'
import { SignInForm } from '@/components/forms/sign-in'
import { StartLayout } from '@/components/layouts/start-layout'
import { AnimationTabs } from '@/components/ui/animation-tabs'

import { paths } from '@/configs/paths'

export const AuthPage: FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const isSignUp = pathname === paths.auth.signUp

	const handleSubmit = (tabIndex: number) => {
		if (tabIndex === 1) navigate(paths.auth.signIn)
		if (tabIndex === 2) navigate(paths.auth.signUp)
	}

	return (
		<StartLayout isCentered isHeightFull>
			<div className='w-full max-w-md rounded-2xl bg-zinc-100 p-4 shadow dark:bg-zinc-900'>
				<AnimationTabs
					className='mb-4'
					defaultTab={isSignUp ? 2 : 1}
					onChange={handleSubmit}
					tabs={[
						{
							id: 1,
							label: 'Войти',
							content: <SignInForm />,
						},
						{
							id: 2,
							label: 'Зарегистрироваться',
							content: <SignUpForm />,
						},
					]}
				/>
			</div>
		</StartLayout>
	)
}
