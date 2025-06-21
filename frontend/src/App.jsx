import './App.css';
import { useState , useEffect } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Error from './Components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  const [theme, setTheme] = useState('light');
  const[isloggedIn , setlog] = useState(false);

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(match.matches ? 'dark' : 'light');

    const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
    match.addEventListener('change', handler);

    return () => match.removeEventListener('change', handler);
  }, []);

  if(isloggedIn === false){
      return (
        <>
        <div className='bg-white text-black dark:bg-gray-950 dark:text-white h-screen overflow-auto'>
          <Router>
            <div className='dark:border-white border-gray-900 rounded-md shadow-slate-950 dark:shadow-gray-500 shadow-md mb-1'>
              <Navbar />
            </div>

            <Routes>
              <Route path='/' element={
                <MainContent />
                } />
              <Route path='/login' element={<Login setlog={setlog} />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path="*" element={<Error />}/>
            </Routes>
            <div>
              <Footer />
            </div>
          </Router>

          <ToastContainer
            limit={2}
            position="top-center"
            autoClose={1500}
            closeOnClick
            pauseOnFocusLoss
            theme={theme}
          />
        </div>
        </>
      );
    }
    else{
      return (
        <Home />
      )
    }
}

export default App;
