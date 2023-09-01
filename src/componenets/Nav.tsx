import{BrowserRouter as Router, Routes,Route,Link,useNavigate}from "react-router-dom"
import { auth } from "../Config/config" 
import {useAuthState} from "react-firebase-hooks/auth"


import { signOut } from "firebase/auth"
export const Nav=()=>{
    const Navigate=useNavigate();
    const signOutUser = async()=>{
        await signOut(auth);
        Navigate('/Login');
    }
    const [user]=useAuthState(auth)
    return (
        <div>
            <div className="NavBar">
                <div></div>
                <div className="Link">
                {user?.uid?<Link  className="link" to={'/'} >Home</Link>: <Link  className="link" to={'/About'} >About</Link>}
                    
                    {user?<Link  className="link" to={'/create'} >Create Posts</Link>: <Link  className="link" to={'/Login'} >LogIn</Link>}
                </div>
                <div className="proph">
                <h3>{user?.displayName}</h3>
                { user &&
                    
                    <div className="image">
                        <img src={user?.photoURL || ""} />
                        <br></br>
                        <button className="Out" onClick=        {signOutUser}   >Log OUT
                        </button>
                    </div>
                    
                }
            </div>
            </div>
           
        </div>

    )

}