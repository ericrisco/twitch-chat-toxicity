import { useEffect } from 'react';
import Tmi from 'react-tmi';

export default function Chatbox(username) {
	const client = new Tmi.Client({
		channels: ['prefoxfox']
	});

	useEffect(() => {
		client.connect();
		client.on('message', (channel, tags, message, self) => {
			console.log(`${tags['display-name']}: ${message}`);
		});
	}, []);

	return (
		<>
			<div class="w-full h-full">
				<div class="flex items-center border-b border-gray-300 pl-3 py-3">
					<span class="block ml-2 font-bold text-base text-gray-600">Eduard</span>
					<span class="connected text-green-500 ml-2" >
						<svg width="6" height="6">
							<circle cx="3" cy="3" r="3" fill="currentColor"></circle>
						</svg>
					</span>
				</div>
				<div id="chat" class="w-full overflow-y-auto p-10 relative">
					<ul>
						<li class="clearfix2">
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
