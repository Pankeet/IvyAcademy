import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='bg-white text-black dark:bg-gray-950 dark:text-white h-screen overflow-auto'>
      <Router>
        <div className='dark:border-white border-gray-900 rounded-md shadow-slate-950 dark:shadow-gray-500 shadow-md'>
          <Navbar />
        </div>

        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        closeOnClick
        pauseOnFocusLoss
        theme="light"
      />
    </div>
  );
}

export default App;
