import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useState,useContext,useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import EventDescription from "./components/EventDescription";
import Execom from "./components/Execom";
import Web from "./components/Web";
import Resources from './components/Resources';
import Contacts from './components/Contacts';
import Login from "./components/GoogleAuth";
import { get_profile } from "./apis/user";
import { UserContext } from "./contexts/UserContext";
import Profile from "./components/Profile";
import {Toast} from 'primereact/toast';
import EditProfile from './components/EditProfile';

function App() {

  const [visible, setVisible] = useState(false);
  const { tokenState, userState } = useContext(UserContext);
  const [token, setToken] = tokenState;
  const [userDetails, setUserDetails] = userState;

  useEffect(() => {
    (async () => {
      const loggedInUserToken = localStorage.getItem('CCUserToken');
      try {
        if(loggedInUserToken.length > 0) {
          const response = await get_profile(loggedInUserToken);
          if(response.status === 200) {
            setUserDetails({...response.response});
            setToken(loggedInUserToken);
            showSuccess();
          }
          else {
            localStorage.setItem('CCUserToken',"");
          }
        }
      }
      catch(err) {
        console.log(err);
      }
    })();
  },[]);

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Login Successful', life: 3000});
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-source">
      <Toast ref={toast} position="bottom-center" />
      <BrowserRouter>
        <Header setVisible={setVisible} />
        <Sidebar
          visible={visible}
          position="right"
          onHide={() => setVisible(false)}
        >
          <div className="flex flex-col gap-7 items-center">
            <Link to="/" onClick={() => setVisible(false)}>
              Home
            </Link>
            <Link to="/events" onClick={() => setVisible(false)}>
              Events
            </Link>
            <Link to="/eventdetails" onClick={() => setVisible(false)}>
              Event Details
            </Link>
          <Link to='/resources' onClick={()=> setVisible(false)}>Resources</Link>
          <Link to='/execom' onClick={() => setVisible(false)}>Execom</Link>
          <Link to='/web' onClick={()=> setVisible(false)}>Web</Link>
          <Link to='/contacts' onClick={()=> setVisible(false)}>Contact</Link>
          {
          (userDetails!==null && token?.length > 0) ?
          <Link to='/profile' onClick={() => setVisible(false)}>Profile</Link>
          :
          <Login/>
          }
        </div>
        </Sidebar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/eventdetails' element={<EventDescription/>} />
          <Route path='/execom' element={<Execom/>} />
          <Route path='/web' element={<Web/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='edit_profile' element={<EditProfile/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
