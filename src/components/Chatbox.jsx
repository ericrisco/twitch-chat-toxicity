// eslint-disable-next-line no-unused-vars
import ChatBubble from './ChatBubble';
import chatMessages from '../services/chatMessages';

export default function Chatbox({ userName }) {
	const { messages } = chatMessages({ userName });
	console.log(messages);
	return (
		<>
			<div className="w-full h-full bg-white">
				<div className="flex items-center border-b border-gray-300 pl-3 py-3">
					<img className="h-10 w-10 rounded-full object-cover"
						src="https://static-cdn.jtvnw.net/jtv_user_pictures/8119134e-ba13-4bfa-b98d-0c80f12230b1-profile_image-70x70.png"
						alt="BelenJurado" />
					<span className="block ml-2 font-bold text-base text-gray-600">
						Eduard
					</span>
					<span className="connected text-green-500 ml-2">
						<svg width="6" height="6">
							<circle cx="3" cy="3" r="3" fill="currentColor"></circle>
						</svg>
					</span>
				</div>
				<div id="chat" className="h- w-full overflow-y-auto p-2 relative">
					<ul>
						<li className="clearfix2">
							{
								messages && messages.map((message, index) => (
									<ChatBubble key={index} username={message.username} message={message.message} ></ChatBubble>
								))
							}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

/*

							*/