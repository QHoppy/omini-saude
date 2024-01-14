import { Button, useColorScheme } from '@mui/joy';

export function ThemeMode() {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}
