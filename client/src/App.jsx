import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/Nav";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
