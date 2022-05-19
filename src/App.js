import logo from './logo.svg';
import './App.css';
import Addemployee from './component/Addemployee';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchemp from './component/Searchemp';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addemployee/>}/>
        <Route path="/search" exact element={<Searchemp/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
