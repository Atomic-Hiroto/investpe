import {Route,Routes} from 'react-router-dom'
import './App.css';
import Gateway from './pages/Gateway';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gateway' element={<Gateway />}/>
      </Routes>
    </>
  );
}

export default App;
