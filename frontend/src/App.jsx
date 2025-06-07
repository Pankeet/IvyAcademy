import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>  
        <Router>
          <div className="border">
            <Navbar />
          </div>
          <Routes>
            <Route path = '/login' element={
              <div className=''>
                <Login />
              </div>
              }>
          </Route>
          <Route path='/signup' element = {  <div>
              <SignUp />
            </div>}></Route>  
        </Routes>
      </Router>
    </>
  )
}

export default App;
