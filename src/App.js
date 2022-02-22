import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Header, Home } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
