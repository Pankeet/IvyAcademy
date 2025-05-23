import logo from '/img/logo.png';
import callimg from '/img/callimg.jpg';
import '../App.css';
import * as motion from "motion/react-client"
export default function Navbar() {
  return (
    <div className="flex font-sans text-md ml-4">
      <div>
        <img src={logo} alt="Logo" className="w-28 h-12 m-3 rounded-xl cursor-pointer"/>
      </div>
      <div className="flex">
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} class="headerCSS"><b>Courses</b></motion.div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} class="headerCSS">Result</motion.div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}class="headerCSS">Test</motion.div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}class="headerCSS">Scholarship</motion.div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}class="headerCSS">More</motion.div>
      </div>
      <div className="flex">
        <div><img src= {callimg} alt="callUs" className="w-8 h-8 m-4 ml-80 mt-5 cursor-help"></img></div>
        <div className="mt-6 ml-1"><span className="border rounded-xl bg-transparent text-black hover:bg-slate-300 cursor-cell p-2">Login</span></div>
    </div>
  </div>
  );
}