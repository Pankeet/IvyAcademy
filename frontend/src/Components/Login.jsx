import { useRef } from 'react';
import axios from 'axios';

function Login(){

    return (
        <>
            <div className="bg-gray-200 min-h-screen flex justify-center items-center font-serif">
                <LoginForm />
            </div>
        </>
    )
}

 function LoginForm(){

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

    return (
        <div className="shadow-md rounded-lg p-10 bg-white max-w-md w-full">
            <h2 className="text-center text-2xl ">Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="text-lg">Email*</label>
                    <input type="email" 
                    className='w-full px-4 py-2 border mt-1 rounded-lg focus:ring-2 focus:ring-red-400 outline-none' 
                    ref={emailRef} 
                    placeholder='Enter you email'></input>
                </div>
                
                <div className='mb-5'>
                    <label className="text-lg">Password*</label>
                    <input type='password'
                    ref={passRef}
                    className='w-full px-3 py-2 mt-1 rounded-lg border focus:ring-2 focus:ring-red-400 outline-none'
                    placeholder='Enter your password'></input>
                </div>

                <div className='mb-2'>
                    <button type='submit' className='bg-green-500 text-lg text-center rounded-xl p-2 w-full'>Submit</button>
                </div>
                
                <div className='flex justify-center'>
                    <p className='cursor-help'>Dont have an account ? <b className='text-blue-500 cursor-pointer' onClick={handleSubmit}>Sign Up</b></p>
                </div>
            </form>
        </div>
    )
}

export default Login;
