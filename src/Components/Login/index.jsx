import { useRef } from "react";
import './Login.css';

export default function Login() {
    const localBackendUrl = 'http://poontoit-react.local/wp-admin/';
    const onlineBackendUrl = 'https://phpstack-1158621-4450522.cloudwaysapps.com/backend/';


    function kk(event) {
        event.preventDefault();
        console.log('eheh');
    }

    return (
        <div id='LoginPageWrapper'>
            <div id='LoginWrapper'>
                <p>Log in</p>
                <form onSubmit={kk}>
                    <input placeholder='username'/>
                    <input placeholder='password'/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};