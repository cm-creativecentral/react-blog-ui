import React, { Fragment } from "react";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </Fragment>

  );
}

export default App;
