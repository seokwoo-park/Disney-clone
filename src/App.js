import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Header } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
