import './App.css';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Updating from './components/Updating'
import Adding from './components/Adding'
import Admin from './components/Admin';


function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Admin />}></Route>
      <Route path='/update/:id' element={<Updating />}></Route>
      <Route path='/add' element={<Adding />}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
