import { useEffect, useState } from "react";
import SidebarToggle from "./icons/SidebarToggle";
import SidebarClose from "./icons/SidebarClose";

const useMediaQuery = (query)=> {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = (e) => setMatches(e.matches);
  
      // Use addEventListener instead of addListener
      media.addEventListener("change", listener);
      
      // Set the initial match state
      setMatches(media.matches);
  
      // Cleanup function to remove the event listener
      return () => {
        media.removeEventListener("change", listener);
      };
    }, [query]);
  
    return matches;
  };

export default function Home(){

    const [sidebar , setSidebar ] = useState(true);
    const isDesktop = useMediaQuery("(min-width:768px)");

    useEffect(()=>{
        if(isDesktop === false){
            setSidebar(false);
        }
        else{
            setSidebar(true);
        }
    }, [isDesktop])
    
    return (
        <div className="flex">
            <SideBar sidebar={sidebar} setSidebar={setSidebar} />
            <Content />
        </div>
    )
}
function SideBar({sidebar , setSidebar}){
    if(!sidebar){
        return <div className='fixed top-0 left-0'>
                <div className="cursor-pointer hover:bg-slate-500" onClick={() => setSidebar(!sidebar)}>
                    <SidebarToggle />
                </div>
            </div>
    }

    else{
        return (
            <div className="w-80 h-screen bg-sky-100 fixed top-0 left-0 md:relative">
                <div className="cursor-pointer hover:bg-slate-500" onClick={() => setSidebar(!sidebar)}>
                    <SidebarClose />
                </div>
            </div>
        )
    }
}
function Content(){
    return (
        <div className="w-full">
            <div className="md:h-40 h-24 text-6xl font-serif bg-gray-900 text-white flex justify-center items-center"> Welcome to Ivy</div>
        <div className="grid grid-cols-11 gap-8 p-6">
            <div className="h-72 rounded-2xl shadow-xl bg-red-300 md:col-span-3 -translate-y-16 hidden md:block"></div>
            <div className="h-96 rounded-2xl shadow-lg bg-green-300 md:col-span-5 col-span-11"></div>
            <div className="h-96 rounded-2xl shadow-lg bg-yellow-300 md:col-span-3 col-span-11 translate-y-10 -z-10"></div>
        </div>
        </div>
    )
}