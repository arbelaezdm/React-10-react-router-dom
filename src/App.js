import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from './components/NotFound'
import Usuarios from './components/Usuarios'

import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link><br/>
      <Link to='/contact'>Contact</Link><br/>
      <hr/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/usuario/:id' element={<Usuarios />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
