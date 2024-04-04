import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'Components/Home';
import Ajax from 'Components/Ajax';
import NoHome from 'Components/NoHome';
import Post from 'Components/Post';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Ajax' element={<Ajax />} />
          <Route path='/NoHome' element={<NoHome />} />
          <Route path='/Post' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
