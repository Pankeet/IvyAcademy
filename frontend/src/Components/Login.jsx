import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){

    return (
        <>
            <div className="bg-gray-200 h-screen flex justify-center items-center font-serif overflow-hidden -mt-5">
                <LoginForm />
            </div>
        </>
    )
}

 function LoginForm(){
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passRef = useRef(null);

    async function handleSubmit(){
        const email = emailRef.current.value;
        const password = passRef.current.value;    

        const data = {email , password};

        try{
            let response = await axios.post('http://localhost:3001/user/signin',data );
            console.log("server response is : " , response.data.message);
            alert('Logging in...');
        }
        catch(err){
            console.error("Error :" ,err);
            alert("Something Went Wrong");
        }
    }

    function notaUser(){
        navigate('/signup');
    }

    return (
        <div className="shadow-lg rounded-lg p-10 bg-white text-black max-w-md w-full overflow-hidden">
            <h2 className="text-center text-2xl ">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='email' className="text-lg">Email*</label>
                    <input type="email" 
                    id='email'
                    className='w-full px-4 py-2 border mt-1 rounded-lg focus:ring-2 focus:ring-red-400 outline-none' 
                    ref={emailRef} 
                    placeholder='Enter you email'></input>
                </div>
                
                <div className='mb-5'>
                    <label htmlFor='password' className="text-lg">Password*</label>
                    <input type='password'
                    id='password'
                    ref={passRef}
                    className='w-full px-3 py-2 mt-1 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none'
                    placeholder='Enter your password'></input>
                </div>

                <div className='mb-2'>
                    <button type='submit' className='bg-green-500 text-lg text-center rounded-xl p-2 w-full'>Submit</button>
                </div>
                
                <div>
                    <span className='cursor-help'> Don't have an account ? </span><b className='text-semibold text-blue-500 cursor-pointer' onClick={notaUser}>Sign Up</b>
                </div>
            </form>
        </div>
    )
}

export default Login;
