import { useCallback, useState, useRef, useEffect } from 'react';

export default function chatScrolling(messages) {
	const [followScroll, setFollowScroll] = useState(true);
	const chatBoxRef = useRef(null);

	const scrollToNewMessage = useCallback(() => {
		chatBoxRef.current?.lastElementChild?.scrollIntoView();
	}, []);

	const toggleFollowScroll = useCallback(() => {
		if (chatBoxRef.current) {
			const scrollHeight = chatBoxRef.current.scrollHeight;
			const scrollTop = chatBoxRef.current.scrollTop;
			const clientHeight = chatBoxRef.current.clientHeight;

			const currentScroll = Math.ceil(scrollTop + clientHeight);
			const isChatBoxScrolled = currentScroll !== scrollHeight;

			setFollowScroll(!isChatBoxScrolled);
		}
	}, []);

	useEffect(() => {
		const ref = chatBoxRef.current;
		ref?.addEventListener('scroll', toggleFollowScroll);
		return () => {
			ref?.removeEventListener('scroll', toggleFollowScroll);
		};
	}, [toggleFollowScroll]);

	useEffect(() => {
		if (followScroll) {
			scrollToNewMessage();
		}
	}, [messages, followScroll, scrollToNewMessage]);

	return {
		chatBoxRef,
		followScroll,
		scrollToNewMessage
	};
}
