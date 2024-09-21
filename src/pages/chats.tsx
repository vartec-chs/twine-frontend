import { type FC } from 'react'
import { useLocation } from 'react-router-dom'

import { Chat } from '@/components/features/Chat'
import { UserList } from '@/components/features/Chat/UserList'

import { useIsMobile } from '@/hooks/use-is-mobile'

import { paths } from '@/configs/paths'

export const ChatsPage: FC = () => {
	const { pathname } = useLocation()

	const isChatsPage = pathname === paths.chats
	const isMobile = useIsMobile()
	const isMobileChatsPage = isMobile && isChatsPage

	return (
		<>
			{(isChatsPage || isMobileChatsPage || !isMobile) && <UserList />}

			{(!isChatsPage || !isMobileChatsPage || !isMobile) && <Chat />}
		</>
	)
}
