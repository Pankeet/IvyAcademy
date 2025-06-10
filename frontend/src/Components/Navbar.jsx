import logo from '/img/logo.png';
import callimg from '/img/callimg.jpg';
import '../App.css';
import { motion }from "motion/react"
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
    function navtoLogin(){
        navigate('/login');
    }
  return (
    <div className="flex font-serif text-md ml-4">
      <div>
        <img src={logo} alt="Logo" className="w-auto h-12 m-3 rounded-xl cursor-pointer"/>
      </div>
      <div className="flex">
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS"><b>Courses</b></motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Result</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Test</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Scholarship</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">More</motion.span>
      </div>
      <div className="flex">
        <div><img src= {callimg} alt="callUs" className="w-8 h-8 m-4 ml-80 mt-5 cursor-help"></img></div>
        <div className="mt-6 ml-1"><span className="border rounded-xl bg-transparent text-black hover:bg-slate-300 cursor-cell p-2" onClick={navtoLogin}>Login</span></div>
    </div>
  </div>
  );
}