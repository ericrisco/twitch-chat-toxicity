import { useState } from 'react';

export default function ChatPausedAlert({ onClick, className }) {
    const [isHovered, setIsHovered] = useState(false);

	const IsPausedLabel = (
        <span className='inline-flex items-center'>
            ⏸️ Chat paused due to scroll
        </span>
	);

	const IsHoverLabel = (
        <span className='inline-flex items-center'>
            🚀 See new messages
        </span>
	);

	const label = isHovered ? IsHoverLabel : IsPausedLabel;

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			className={`w-64 inline-flex justify-center px-4 py-2 rounded-lg text-white bg-black/80 cursor-pointer ${className}`}>
				{label}
		</div>
	);
}
