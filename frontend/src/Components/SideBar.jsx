import logo from '/img/logo.png';
import callimg from '/img/callimg.jpg';
import '../App.css';
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
//import { useLayoutEffect } from 'react';
//import gsap from 'gsap';
export default function Navbar() {

  // useLayoutEffect(()=>{
  //   gsap.from("div", {
  //     y:-20,
  //     duration : 0.6,
  //     delay:0.5,
  //     opacity:0,
  //     stagger:0.3
  // })
  // },[])
  const navigate = useNavigate();

    function navtoLogin(){
        navigate('/login');
    }

    function navtoHome(){
      navigate('/');
    }
    
  return (
    <div className="lg:flex font-serif text-md ml-4 ">
      <div className="lg:block flex justify-between pt-2 lg:pt-0 pb-2 lg:pb-0">
        <img src={logo} alt="Logo" onClick={navtoHome} className="lg:block hidden lg:w-auto lg:h-12 lg:m-3 rounded-xl cursor-pointer w-10 h-5"/>
        <img src="/img/brand.svg" alt="Logo" onClick={navtoHome} className=" block lg:hidden  rounded-xl cursor-pointer w-7 h-7"/>
        <div className="lg:hidden flex ">
          <div>
            <img src= {callimg} alt="callUs" className="w-6 h-6 cursor-help mt-1 mr-3"></img>
          </div>
          <div className="mt-1 pb-1 mr-2">
            <span className="p-1 border rounded-xl bg-transparent hover:bg-slate-300 cursor-cell ml-1" onClick={navtoLogin}>Login</span>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden">
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS"><b>Courses</b></motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Result</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Test</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Scholarship</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">More</motion.span>
      </div>
      <div className="lg:flex hidden">
        <div><img src= {callimg} alt="callUs" className="w-8 h-8 m-4 ml-80 mt-5 cursor-help"></img></div>
        <div className="mt-6 ml-1"><span className="border rounded-xl bg-transparent hover:bg-slate-300 cursor-cell p-2" onClick={navtoLogin}>Login</span></div>
    </div>
  </div>
  );
}