import './App.css'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Sidebar} from 'primereact/sidebar';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import EventDescription from './components/EventDescription';
import Execom from './components/Execom';
import Web from './components/Web';

function App() {

  const [visible,setVisible] = useState(false);

  return (
    <div className='min-h-screen flex flex-col bg-black text-white font-source'>
      <BrowserRouter>
        <Header setVisible={setVisible}/>
        <Sidebar visible={visible} position='right' onHide={() => setVisible(false)}>
          <div className='flex flex-col gap-7 items-center'>
            <Link to='/' onClick={()=> setVisible(false)}>Home</Link>
            <Link to='/events' onClick={()=> setVisible(false)}>Events</Link>
            <Link to='/eventdetails' onClick={()=> setVisible(false)}>Event Details</Link>
            <Link to='/execom' onClick={() => setVisible(false)}>Execom</Link>
            <Link to='/web' onClick={()=> setVisible(false)}>Web Team</Link>
          </div>
        </Sidebar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/eventdetails' element={<EventDescription/>} />
          <Route path='/execom' element={<Execom/>} />
          <Route path='/web' element={<Web/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
