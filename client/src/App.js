// mui imports
import { Box } from '@mui/material';

//components imports
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Box style={{marginTop: 56}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
