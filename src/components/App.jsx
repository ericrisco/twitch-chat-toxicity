import Chat from '@components/Chat.jsx';
import Form from '@components/Form.jsx';

export default function App() {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	const userName = params.username || 'midudev';

	return (
		<div className="grid grid-cols-12">
			<div className="hidden lg:block col-span-12 lg:col-span-6">
				<Form />
			</div>
			<div className="col-span-12 lg:col-span-6 lg:pr-10 xl:pr-[200px]">
				<Chat userName={userName} />
			</div>
		</div>
	);
}
