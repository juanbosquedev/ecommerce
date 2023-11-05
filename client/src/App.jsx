import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/Nav";
import { Login } from "./components/Login";
import { Products } from "./components/Products";
import { useSelector } from "react-redux";
import { Carrito } from "./components/Carrito";
import { Pedidos } from "./components/Pedidos";

function App() {
  const userLog = useSelector((state) => state.userLogged.logged);

  return (
    <>
      <NavBar logged={userLog} />
      <div className="container">
        <Routes>
          {!userLog && <Route path="/" element={<Login />}></Route>}
          <Route path="/Tienda" element={<Products logged={userLog} />}></Route>
          {userLog && (
            <Route
              path="/Carrito"
              element={<Carrito logged={userLog} />}
            ></Route>
          )}
          {userLog && (
            <Route
              path="/Pedidos"
              element={<Pedidos logged={userLog} />}
            ></Route>
          )}
          <Route path="/*" element={<Navigate to="/Tienda"></Navigate>}></Route>
          
        </Routes>
      </div>
    </>
  );
}

export default App;
