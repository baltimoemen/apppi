
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Admin from './Pages/Admin';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <h1>Checkpoint API</h1>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Admin' element={<Admin/>} />
      <Route path='/Users' element={<Users/>} />
      <Route path='/*' element={<Error/>} />
      <Route path='/user/:id' element={<Profile/>} />
    </Routes>

    </div>
  );
}

export default App;
