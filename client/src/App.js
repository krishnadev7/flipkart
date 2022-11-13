import {DataProvider} from './context/DataProvider';

// mui imports
import { Box } from '@mui/material';

//components imports
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <DataProvider className='App'>
      <Header />
      <Box style={{ marginTop: 56 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
