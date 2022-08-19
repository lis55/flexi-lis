import logo from './logo.svg';
import './App.css';
import Pricing from './components/pricing';
import { HeaderImg } from './components/header';
import { Container } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';


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
