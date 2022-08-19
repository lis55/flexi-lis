
import './App.css';
import Pricing from './components/pricing';
import { HeaderImg } from './components/header';
import { Container } from '@mui/system';


function App() {
  return (
    <div className="App">
      <HeaderImg></HeaderImg>
      <Container>
      <Pricing/>
      </Container>
    </div>
  );
}

export default App;
