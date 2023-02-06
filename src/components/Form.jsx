export default function Form() {
	return (
		<div className="flex min-h-full justify-center py-3 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<form className="mt-8 space-y-6" type="get" autoComplete="off">
					<h3 className="text-center font-black text-white text-3xl pt-10 pb-6">
						Twitch ☣️Toxic <p className="text-5xl">Tracker</p>
					</h3>
					<p className="text-center font-light text-white text-md pb-3">
					The Twitch Toxic Tracker is an innovative application that provides real-time monitoring and analysis of Twitch chat messages. It is designed to help streamers and moderators maintain a positive and welcoming environment for their viewers by detecting and classifying toxic messages.
					</p>
					<p className="text-center font-light text-white text-md pb-6">
						Add one Twitch streamer user name to track his chat
					</p>
					<p className="text-center font-light text-white text-md pb-6">
						You can resize this window and attach it to your stream to monitor the chat in real-time
					</p>
					<div className="flex rounded-md shadow-sm">
						<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
							@
						</span>
						<input
							type="text"
							name="username"
							id="username"
							className="relative block w-full appearance-none rounded-r-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							placeholder="Twitch Username (e.g. thegrefg)"
						/>
					</div>
					<div>
						<button
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24">
									<path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" />
								</svg>
							</span>
							Read Chat
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
