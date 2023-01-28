import { useCallback, useEffect, useState } from 'react';


export default function useChatMessages() {
    const [messages, setMessages] = useState([]);

	const client = new Tmi.Client({
		channels: ['elspreen']
	});
	client.connect();

    const socket = useChatConnection()

    const appendNewMessage = useCallback(
        (newMessage) => {
            const nextMessages = [
                ...messages.slice(-MESSAGE_WINDOW),
                newMessage,
            ]
            setMessages(nextMessages)
        },
        [messages]
    )

    useEffect(() => {
        socket?.on('new-message', (msg) => {
            appendNewMessage(msg)
        })

        return () => {
            socket?.off('new-message')
        }
    }, [appendNewMessage, socket])

    return {
        messages
    }
}