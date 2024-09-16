import { create } from 'zustand'

type SignUpFormState = {
	step: number
	formData: {
		firstName: string
		lastName: string
		birthDate: string
		birthDay: string
		birthMonth: string
		birthYear: string
		phone: string
		email: string
		nickname: string
		password: string
		confirmPassword: string
	}
	nextStep: () => void
	prevStep: () => void
	updateFormData: (data: Partial<SignUpFormState['formData']>) => void
	resetFormData: () => void
}

export const useSignUpFormStore = create<SignUpFormState>((set) => ({
	step: 1,
	formData: {
		firstName: '',
		lastName: '',
		birthDate: '',
		birthDay: '',
		birthMonth: '',
		birthYear: '',
		phone: '',
		email: '',
		nickname: '',
		password: '',
		confirmPassword: '',
	},
	nextStep: () => set((state) => ({ step: state.step + 1 })),
	prevStep: () => set((state) => ({ step: state.step - 1 })),
	updateFormData: (data) =>
		set((state) => ({
			formData: {
				...state.formData,
				...data,
			},
		})),
	resetFormData: () => set({ formData: { ...useSignUpFormStore.getState().formData } }),
}))
