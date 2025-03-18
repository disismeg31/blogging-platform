 import {useRef} from 'react';
import { useNavigate } from "react-router-dom";
import CustomBtn from '../components/CustomBtn.jsx';
 
function Login() {
    const usernameInputElement = useRef();
    const passwordInputElement = useRef();
    const navigate = useNavigate();
    const handleLoginClick = () => {
        if(usernameInputElement.current.value === "abc@123" && passwordInputElement.current.value === "123"){
            navigate("/home"); // Navigate to the home page
            console.log(usernameInputElement.current.value,passwordInputElement.current.value)
        }
        else{
            alert('incorrect username👤 & password🔑');
            usernameInputElement.current.value="";
            passwordInputElement.current.value="";
        }   
    };
    return(   
        <div className='w-full h-screen flex  justify-center items-center p-2'>
            <div className="w-96 h-64 p-4 bg-[#A7D477] flex flex-col justify-center items-center rounded-xl">
            <input className='w-64 h-12 m-2 p-3 text-md border-none bg-[#ffffff75] text-[#63a363] rounded-md placeholder:text-[#E46161]' ref={usernameInputElement}  name='username'   type="text" placeholder="abc@123"   />
            <input className='w-64 h-12 m-2 p-3 text-md border-none bg-[#ffffff75] text-[#63a363] rounded-md placeholder:text-[#E46161]' ref={passwordInputElement} name='password'   type="password" placeholder="123"  />
            <CustomBtn label="Login" onClick={handleLoginClick}/>
            </div>  
        </div>
    )
}

export default Login;
