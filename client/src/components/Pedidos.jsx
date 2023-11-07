import { useSelector, useDispatch } from "react-redux";
import {
  deleteOrdered,
  get_purchases,
  get_purchaseById,
} from "../redux/actions/actionCreator";
import { useEffect } from "react";
export const Pedidos = () => {
  const user = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteOrdered(id));
  };
  const ordered = useSelector((state) => state.comprasBack);

  useEffect(() => {
    user.role === "admin"
      ? dispatch(get_purchases())
      : dispatch(get_purchaseById(user.id));
  },[dispatch]);

  return (
    <>
      <div>PEDIDOS HECHOS</div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {ordered &&
            ordered.map((item) => {
              return (
                <tr key={item.id}>
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
            })}
        </tbody>
      </table>
    </>
  );
};
