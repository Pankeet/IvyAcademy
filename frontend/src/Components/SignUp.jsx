import { useRef , useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp(){
    return (
        <>
            <div className="bg-gray-200 min-h-screen -mt-5 grid place-content-center font-serif">
                <SignForm />
            </div>
        </>
    )
}

function SignForm(){

    const [loading , setloading ] = useState(false);
    const [err , seterr] = useState('');
    const navigate = useNavigate();

    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    async function handleSubmit(e){
        e.preventDefault();
        setloading((prev) => !prev );
        const data = {
            firstname : firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email : emailRef.current.value,
            password : passRef.current.value
        }   

        if(data.firstname === "" || data.lastname === "" || data.password === "") {
            setloading((prev) => !prev);
            toast.error("Please fill the details first");
            return ;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(data.email)) {
            seterr("Please Enter a valid email");
            setloading((prev)=> !prev);
            return ;
        }
        else{
            seterr('');
        }
         
        try{
            let response = await axios.post('https://ivyacademy.onrender.com/user/signup' , data);
            if(response){
                console.log('Server response : ' , response);
                toast.success(response.data.message);
                setTimeout(()=>{
                    setloading((prev) => !prev );
                    navigate('/login')} , 1800);
            }
    }
    catch(err){
        console.error("Error :", err);
    
        if (err.response) {
            toast.error(err.response?.data?.message || "Something Went Wrong ! ");
        } else {
            toast.error("Backend server not reachable. Please try again later.");
        }
        setloading((prev) => !prev );
    }
    
    }

    function alreadyUser(){
        navigate('/login');
    }
    
    return (
        <div className="shadow-md rounded-lg p-9 bg-white text-black max-w-lg w-full">
            <h2 className="text-center text-2xl ">Create an Account </h2>
            <h4 className='text-center text-lg mb-3 font-extralight'> To get started fill out this form </h4>
            <form>
                <div>
                    <label className="text-lg">Firstname*</label>
                    <label className='text-lg ml-36'>LastName*</label>
                </div>
                <div>
                <input type="text" 
                        className="focus:ring-2 focus:ring-blue-500 border  rounded-lg outline-none p-2"
                        placeholder='John'
                        ref={firstnameRef}
                        required></input>

                <input type="text" 
                        className="ml-11 focus:ring-2 focus:ring-blue-500 border  rounded-lg outline-none p-2"
                        placeholder='Doe'
                        ref={lastnameRef}
                        required ></input>
                </div>
                <div>
                    <label className='tex-lg'>Email*</label>
                    <input type='email'
                    className='p-2 w-full border rounded-lg  outline-none focus:ring-2 focus:ring-blue-500'
                    ref={emailRef}
                    placeholder='johndoe@gmail.com' 
                    required>
                    </input>
                    <p className='text-red-600 text-sm'>{err}</p>
                </div>
                <div>
                    <label className='text-lg'>Password*</label>
                    <input type='password'
                    className='p-2 w-full border rounded-lg  outline-none focus:ring-2 focus:ring-blue-500'
                    ref={passRef}
                    required
                    placeholder='password'></input>
                </div>
                <div className='flex justify-center mt-5'>
                    <button onClick={(e)=>handleSubmit(e)} disabled={loading} className={`mb-2 bg-green-500 border outline-none items-center rounded-md w-full py-2 shadow-lg ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}` }>{loading ? 'Signing Up....' : 'SignUp' }</button>
                </div>
                <div>
                    <span className='cursor-help'>Already an Account ? </span><b className='text-semibold text-blue-500 cursor-pointer' onClick={alreadyUser}>Login</b>
                </div>
            </form>
        </div>
    )
}
