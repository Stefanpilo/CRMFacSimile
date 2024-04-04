import Home from 'Components/Home';
import { useEffect, useRef } from 'react';

export default function Ajax() {
    const style = {
        fontSize : '70px',
        color: 'red'
    }

    var h1 = useRef();
    useEffect( () => {
        window.scrollTo( {
            top: h1.current.offsetTop,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <Home />
            <h1 id='paolo' style={style} ref={h1} >PAOLO È BELLISSIMO</h1>
        </>
    );
};