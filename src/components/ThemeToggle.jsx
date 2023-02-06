import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // eslint-disable-next-line no-undef
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // eslint-disable-next-line no-undef
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
	<p className="text-center font-light dark:text-gray-300 text-md pb-3 dark:text-black-300">
		<button className='p-2 border-2 rounded-full border-black dark:border-gray-300' onClick={handleClick}>{
			theme === 'light'
				? '🌙 Dark Mode'
				: '🌞 Light Mode'
			}
		</button>
	</p>
  );
}
