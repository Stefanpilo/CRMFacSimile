import { useRef, useState } from "react";

export default function Post() {
    const [buttonText, setButtonText] = useState('');
    const backendUrl = 'https://phpstack-1158621-4450522.cloudwaysapps.com/backend/admin-ajax.php';

    const jenVoto = useRef();

    function handleClick() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', backendUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200)
                //setButtonText(xhr.responseText);
                console.log(xhr.response);
            else
                console.error('Errore eheheh');
        };

        xhr.onerror = function() {
            console.error('Errore rete');
        };

        const data = 'action=insert&nome=Jennifer&cognome=Cacca&esame=Architettura&voto=-30';

        xhr.send(data);
    };

    function selectJennifer() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', backendUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //jenVoto.current.textContent = xhr.responseText;
                console.log(xhr.response);
            }
            else
                console.error('Errore eheheh');
        };

        xhr.onerror = function() {
            console.error('Errore rete');
        };

        const data = 'action=selectVoto&nome=Jennifer';

        xhr.send(data);
    };

    function selectJenniferGet() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', backendUrl + '?ggf=selectVotoGet&nome=Jennifer', true);
        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response);
            }
            else
                console.error('Errore eheheh');
        };

        xhr.onerror = function() {
            console.error('Errore rete');
        };

        xhr.send();
    };

    function selectAll() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', backendUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response);
            }
            else
                console.error('Errore eheheh');
        };

        xhr.onerror = function() {
            console.error('Errore rete');
        };

        const data = 'action=selectAll';

        xhr.send(data);
    };

    function selectAllGet() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', backendUrl + '?action=selectAllGet', true);
        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response);
            }
            else
                console.error('Errore eheheh');
        };

        xhr.onerror = function() {
            console.error('Errore rete');
        };

        xhr.send();
    };

    return (
        <>
            <button onClick={handleClick}>{buttonText ? buttonText : 'clickami'}</button>
            <button onClick={selectJennifer} >Quanto ha preso jennifer?</button>
            <button onClick={selectJenniferGet} >Quanto ha preso jennifer? Get</button>
            <span ref={jenVoto}></span><br />
            <button onClick={selectAll} >Mostra tutti</button>
            <button onClick={selectAllGet}>Mostra tutti get</button>
        </>
    );
};