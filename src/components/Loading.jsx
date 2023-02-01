import { randomColors } from '@services/config.js';

export default function Loading() {
	const skeletons = randomColors.map((color) => {
		return { width: 150 + Math.floor(150 * Math.random()), color };
	});

	return (
		<div role="status" className="space-y-2.5 animate-pulse max-w-lg p-4">
			{
				skeletons.map((skeleton, index) => (
					<div key={index} className="flex items-center w-full space-x-2">
						<div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700" style={{ width: skeleton.width, backgroundColor: skeleton.color }}></div>
						<div className="h-6 bg-gray-300 rounded-full w-full"></div>
					</div>
				))
			}
		</div>

	);
}
