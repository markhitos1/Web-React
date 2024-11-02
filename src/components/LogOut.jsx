import {auth} from '../firebase';
import {signOut} from 'firebase/auth'



const LogOut = () => {
    const logOut = () => {
        signOut(auth);
    };
    return (
        <button 
        className="btn-login btn-logout"
        onClick={logOut}
        >
            <i className="fa-brands fa-google"></i>
            LogOut
        </button>
      );
}
 
export default LogOut ;