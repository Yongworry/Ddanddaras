import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from "./pages/feed.js"
import MainPage from "./pages/main.js"
import BrickPage from "./pages/brick.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/feed" element={<FeedPage />}></Route>
          <Route path="/brick_breaker" element={<BrickPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
