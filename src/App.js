import { DetailPage } from "./Page/DetailPage";
import { LandingTheme } from "./Theme/LandingTheme"
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={LandingTheme}>
        <DetailPage/>
    </ThemeProvider>
  );
}

export default App;
