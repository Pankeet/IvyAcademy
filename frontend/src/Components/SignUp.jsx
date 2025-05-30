import { useRef , useState } from 'react';
import axios from 'axios';
export default function SignUp(){
    return (
        <>
            <div className="bg-gray-200 min-h-screen flex justify-center items-center font-serif">
                <SignForm />
            </div>
        </>
    )
}

function SignForm(){

    const [loading , setloading ] = useState(false);

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
        
        try{
            let response = await axios.post('http://localhost:3001/user/signup' , data);
            if(response){
                console.log('Server response : ' , response);
                alert(response.data.message);
                setloading((prev) => !prev );
            }
    }
        catch(err){
            console.error("Error :" + err);
            alert("Something went wrong !");
            setloading((prev) => !prev );
        }
    }
    return (
        <div className="shadow-md rounded-lg p-10 bg-white max-w-lg w-full">
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
                        ref={firstnameRef}></input>

                <input type="text" 
                        className="ml-11 focus:ring-2 focus:ring-blue-500 border  rounded-lg outline-none p-2"
                        placeholder='Doe'
                        ref={lastnameRef}></input>
                </div>
                <div>
                    <label className='tex-lg'>Email*</label>
                    <input type='email'
                    className='p-2 w-full border rounded-lg  outline-none focus:ring-2 focus:ring-blue-500'
                    ref={emailRef}
                    placeholder='johndoe@gmail.com'>
                    </input>
                </div>
                <div>
                    <label className='text-lg'>Password*</label>
                    <input type='password'
                    className='p-2 w-full border rounded-lg  outline-none focus:ring-2 focus:ring-blue-500'
                    ref={passRef}
                    placeholder='#JohnDoe169400'></input>
                </div>
                <div className='flex justify-center mt-5'>
                    <button onClick={(e)=>handleSubmit(e)} disabled={loading} className={`bg-green-500 border outline-none items-center rounded-md w-full py-2 shadow-lg ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}` }>{loading ? 'Signing Up....' : 'SignUp' }</button>
                </div>
                <div>
                    <p className='cursor-help mt-2'>Already an Account ? <b className='text-semibold text-blue-500 cursor-pointer'>Login</b></p>
                </div>
            </form>
        </div>
    )
}
