import { type FC } from 'react'

import { SignUpStep1 } from './step-1'
import { SignUpStep2 } from './step-2'
import { SignUpStep3 } from './step-3'
import { SignUpStep4 } from './step-4'
import { useSignUpFormStore } from '@/store-hooks/useSignUpFormStore'

export const SignUpForm: FC = () => {
	const { step } = useSignUpFormStore()

	return {
		[1]: <SignUpStep1 />,
		[2]: <SignUpStep2 />,
		[3]: <SignUpStep3 />,
		[4]: <SignUpStep4 />,
	}[step]
}
