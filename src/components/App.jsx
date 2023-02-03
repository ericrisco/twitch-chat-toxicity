import Chat from '@components/Chat.jsx';
import Form from '@components/Form.jsx';
import { useState } from 'react';

export default function App() {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	const userName = params.username || 'belenjurado';

	return (
		<div className="grid grid-cols-12">
			<div className="hidden lg:block col-span-12 lg:col-span-6 xl:col-start-2 xl:col-end-5">
				<Form />
			</div>
			<div className="col-span-12 lg:col-span-6 xl:col-start-6 xl:col-end-10">
				<Chat userName={userName} />
			</div>
		</div>
	);
}
