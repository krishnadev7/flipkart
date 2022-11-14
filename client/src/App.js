import {DataProvider} from './context/DataProvider';

// mui imports
import { Box, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

//components imports
import Header from './components/header/Header';
import Home from './components/home/Home';

// for responsive mui
let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider className='App'>
        <Header />
        <Box style={{ marginTop: 56 }}>
          <Home />
        </Box>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
