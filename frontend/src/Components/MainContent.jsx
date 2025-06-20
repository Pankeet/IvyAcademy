import gsap from 'gsap';
import image from '/img/McPhoto.avif';
import { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function MainContent(){
    const contentL = useRef();
    const contentR = useRef();
    
    const nav = useNavigate();

    useLayoutEffect(()=>{
        gsap.from(contentL.current, {
          x:-30,
          duration : 0.9,
          delay:1,
          opacity:0,
      })
      gsap.from(contentR.current, {
        x:20,
        duration : 0.9,
        delay:1,
        opacity:0,
    })
      },[])
    return (
    <div className="mx-5 grid grid-cols-10 text-5xl h-screen font-[PT Serif]">
        <div ref={contentL} className="col-span-5 place-content-center ml-12">
            <h1>"Your Knowledge Hub, <b className="ml-6">Reinvented</b>"</h1>
            <div className='text-xl mr-20 ml-6 my-7 text-justify font-[PT serif]'>Start or advance your career with more than 10,000 courses,
                and certificates from world-class teachers
            </div>
            <div className='mt-4 ml-20 place-content-start gap-7 flex'>
                <button className='bg-green-600 hover:border-t hover:border-green-700 hover:bg-transparent dark:text-black
                 dark:hover:text-white hover:text-black text-white font-serif text-lg px-10 py-3 rounded-lg
                 hover:shadow-xl hover:shadow-green-800 transition duration-200 hover:scale-110 hover:overflow-hidden'
                 onClick={()=>nav('/login')}>Login</button>
                <button className='border font-serif text-lg px-10 py-3 rounded-lg bg-transparent hover:scale-110 
                dark:hover:shadow-white hover:shadow-lg hover:border-b-0 hover:border-l-0 hover:border-r-0 
                hover:border-[0.6px] transition duration-200 hover:overflow-hidden hover:shadow-black'
                onClick={()=>nav('/signup')}>Sign Up</button>
            </div>
        </div>
        <div ref={contentR} className="col-span-5 grid place-content-center">
            <img src={image} className='rounded-full w-96 h-80'></img>
        </div>
    </div>)
}