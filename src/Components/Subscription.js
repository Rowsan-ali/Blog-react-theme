import 'react-dom';
import '../App.css';

function Subscription(){
    return(
        <>
        <div className='Subscription_container'>
            <div className='Subscription-header'>
                <h2 className='Subscription-heading'>Subscribe to your newsletter for more updates</h2>
            </div>
            <div className='Subscription-content'>
                <input className='Subscription_input' placeholder='Enter your email'></input>
                <button className='Subscription-btn'>SUBSCRIBE</button>
            </div>
        </div>
        </>
    )
}

export default Subscription