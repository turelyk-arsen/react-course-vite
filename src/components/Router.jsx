import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<div>Not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
