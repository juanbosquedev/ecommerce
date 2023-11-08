import { useSelector, useDispatch } from "react-redux";
import {
  deleteOrdered,
  get_purchases,
  get_purchaseById,
} from "../redux/actions/actionCreator";
import { useEffect, useState, useMemo } from "react";

export const Pedidos = () => {
  const user = useSelector((state) => state.userLogged);
  const ordered = useSelector((state) => state.comprasBack);
  console.log(ordered, " soy ordered");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const getPurchase = () => {
    user.role === "admin"
      ? dispatch(get_purchases())
      : dispatch(get_purchaseById(user.id));
  };
  const calculation = useMemo(() => console.log("ejectuo"), getPurchase(), [
    ordered,
  ]);

  const handleDelete = (id) => {
    setCount(count + 1);
    dispatch(deleteOrdered(id));
  };

  useEffect(() => {
    getPurchase();
  }, []);
  return (
    <>
      <div>PEDIDOS HECHOS</div>
      {calculation}
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {typeof ordered === "string" ? (
            <h1 className="display-6">{ordered}</h1>
          ) : (
            ordered.map((item) => {
              return (
                <tr key={item.idTable}>
                  <th>{item.title}</th>

                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};
