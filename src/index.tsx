import { createRoot } from 'react-dom/client';
import App from '@/App';
import theme from '@/Theme/Style';
import { ThemeProvider } from '@/Theme/themeProvider';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
