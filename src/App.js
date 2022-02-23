import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Header, Home, Detail } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="detail/:type/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
