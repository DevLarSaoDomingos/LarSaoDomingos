import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
// import { ApolloProvider } from "@apollo/client"; // Ensure this wrapper handles routing

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostPage/>} /> {/* Rota para o post */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
