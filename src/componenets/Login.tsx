import { auth,provider } from "../Config/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Login =()=>{
    const Navigate=useNavigate();
    const signInWithGoogle=async()=>{
        const reuslt =await signInWithPopup(auth,provider);
        Navigate('/')
        console.log(reuslt)
        

    }
    return (
        <div>
            <h1>Login Page</h1>
            <p>Continue with google</p>
            <button className="In" onClick={signInWithGoogle}>Sing in with google</button>
        </div>
       
        


    )
}