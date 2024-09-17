import { useMediaQuery } from '@siberiacancode/reactuse'

export const useIsMobile = (): boolean => {
	const isMobile = useMediaQuery('(max-width: 768px)')

	return isMobile
}
