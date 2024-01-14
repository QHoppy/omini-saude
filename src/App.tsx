import { CssBaseline, CssVarsProvider } from '@mui/joy';

import { Router } from './routes';

export function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Router />
    </CssVarsProvider>
  );
}

export default App;
