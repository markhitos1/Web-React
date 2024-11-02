
import {auth} from '../firebase';
import {formatDate} from './helpers';

const Message = ({ message }) =>{

    let newStyle = 'message';
    if (auth.currentUser) {
        const user = auth.currentUser.uid;
        const newUser = message.uid;
        newStyle = user === newUser ? 'my-message' : 'message';
    }

    console.log(message);
    return (
        <article className={newStyle} >
           <div className='content-messages' >
           <div className="text-message" >
            <p className="text" >{message.text}</p>
            <p className='time' >{formatDate(message.timestamp)}</p>
            </div>
           <img src={message.photo} alt="user" referrerPolicy='no-referrer'/>
           </div>
        </article>
    );
}

export default Message; 
