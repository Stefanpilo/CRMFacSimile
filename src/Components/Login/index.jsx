import { useRef } from "react";

export default function Login() {
    const backendUrl = 'http://poontoit-react.local/wp-admin/personal-admin-ajax.php';
    var username = useRef();

    function handler() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', backendUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.onload = function() {
            if (xhr.status === 200 && xhr.readyState === 4)
                console.log(xhr.response);
            else
                console.log('Errore di rete');
        };
        const data = 'username=' + username.current.value;

        xhr.send(data);
    }

    return (
        <>
            <h1>Log in</h1>
            <input type='text' placeholder='username' ref={username}/><br />
            <input type='text' placeholder='password' /><br />
            <button type='submit' onClick={handler}>Invia</button>
        </>
    );
};