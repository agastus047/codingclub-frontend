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

function App() {

  const [visible,setVisible] = useState(false);

  return (
    <div className='min-h-screen flex flex-col bg-black text-white'>
      <Header setVisible={setVisible}/>
      Home Page
      <Sidebar visible={visible} position='right' onHide={() => setVisible(false)}>
        <h2>Coding Club TKMCE</h2>
        {/* <Link to='' onClick={()=> setVisible(false)}>Link 1</Link>
        <Link to='' onClick={()=> setVisible(false)}>Link 2</Link> */}
        <div>Link 1</div>
        <div>Link 2</div>
      </Sidebar>
      <Footer />
    </div>
  )
}

export default App
