import './App.scss';
import Register from './pages/Register';
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/card/:id" element={<Tour />}></Route>
        

        {/* <Route path="/post/:id" element={<FullPost />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/post/addPost" element={<AddPost />}></Route>
        <Route path="/post/:id/edit" element={<AddPost />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
