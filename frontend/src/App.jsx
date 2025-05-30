import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {
  return (
    <>
      <div className="border">
        <Navbar />
      </div>
      {/* <div>
        <Login />
      </div> */}
      <div>
        <SignUp />
      </div>
    </>
  )
}

export default App;
