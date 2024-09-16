export const paths = {
	home: '/',
	auth: {
		index: '/auth',
		signIn: '/auth/sign-in',
		signUp: '/auth/sign-up',
		confirmEmail: '/auth/confirm-email',
		confirmEmailWithCode: (code: string) => `/auth/confirm-email/${code}`,
	},
	profile: '/profile',
	chats: '/chats',
	chat: {
		index: '/chat',
		withId: (id: string) => `/chat/${id}`,
	},
}
