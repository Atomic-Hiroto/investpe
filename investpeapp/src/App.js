import {Route,Routes} from 'react-router-dom'
import './App.css';
import Gateway from './pages/Gateway';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/gateway' element={<Gateway />}/>
      </Routes>
    </>
  );
}

export default App;
