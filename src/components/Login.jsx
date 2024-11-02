import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase';

const Login = () =>{  
    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    return (
        <button 
        className="btn-login"
        onClick={googleLogin}
         > <i className="fa-brands fa-google"></i>
         Sign in with Google</button>
    );
}
export default Login;