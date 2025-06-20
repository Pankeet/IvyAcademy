import logo from '/img/logo.png';
import '../App.css';
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useRef  } from 'react';
import gsap from 'gsap';
export default function Navbar() {

  const headerRef = useRef();

  useLayoutEffect(()=>{
    gsap.from(headerRef.current, {
      y:-20,
      duration : 0.7,
      delay:0.5,
      opacity:0,
      stagger: 0.5
  })
  },[]);

  const navigate = useNavigate();

    function navtoHome(){
      navigate('/');
    }
    
  return (
    <div className="flex font-serif text-md ml-4" ref={headerRef}>
      <div >
        <img src={logo} alt="Logo" onClick={navtoHome} className="block w-auto h-12 m-3 rounded-xl cursor-pointer"/>
      </div>
      <div className="flex">
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS"><b>Courses</b></motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Result</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Test</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">Scholarship</motion.span>
        <motion.span whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="headerCSS">More</motion.span>
      </div>
      <div className="flex">
        <div className="mt-6 ml-80 mr-1 hover:scale-105 duration-200"><span className="border rounded-xl bg-transparent hover:bg-slate-600 cursor-cell p-2">Contact US</span></div>
        <div>
          <img src="/img/callme.svg" alt="callUs" className="dark:block hidden w-7 h-7 m-4 ml-2 mt-6 cursor-help"></img>
          <img src="/img/callmeLight.svg" alt="callUsLightMode" className="block dark:hidden w-6 h-6 m-4 ml-2 mt-6 cursor-help"></img>
        </div>
    </div>
  </div>
  );
}