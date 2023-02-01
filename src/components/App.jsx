import Chat from '@components/Chat.jsx';
import Form from '@components/Form.jsx';
import { useState } from 'react';

export default function App() {
	const [userName, setUserName] = useState('elxokas');

	const changeUserName = (newUserName) => {
		setUserName(newUserName);
	};

	return (
		<div className="grid grid-cols-12">
			<div className="col-span-12 md:col-span-6 lg:col-start-3 lg:col-end-6">
				<Form changeUserName={ changeUserName }/>
			</div>
			<div className="min-h-screen pl-5 pr-5 pt-20 pb-20 col-span-12 sm:col-span-12 md:col-span-6 lg:col-start-6 lg:col-end-10">
				<Chat userName={ userName } />
			</div>
		</div>
	);
}
