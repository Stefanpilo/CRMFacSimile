import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from 'Components/Home';
import Login from 'Components/Login';


function App() {
  const [loggedRole, setLoggedRole] = useState(false);

  useEffect( () => {
    setLoggedRole(sessionStorage.getItem('userRole'));
  }, [loggedRole]);


  function CheckUserRole() {
    if (!loggedRole)
      return <Navigate to='/login' />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CheckUserRole />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
