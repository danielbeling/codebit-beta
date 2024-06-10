import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onClick={toggleTheme} variant='ghost' size='sm' className='h-6 w-6 px-0 ml-2'>
      {theme === 'dark' ? (
        <FiSun className='text-2xl transition-transform duration-500 ease-in-out transform rotate-0 hover:rotate-180 text-yellow-500 ' />
      ) : (
        <FiMoon className='text-2xl transition-transform duration-500 ease-in-out transform rotate-0 hover:rotate-180 text-gray-500 ' />
      )}
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
}
