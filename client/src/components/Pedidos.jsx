import { useSelector, useDispatch } from "react-redux";
import { deleteOrdered } from "../redux/actions/actionCreator";
export const Pedidos = () => {
  const ordered = useSelector((state) => state.comprasBack);
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
    dispatch(deleteOrdered(id))
  }

  return (
    <>
    <div>PEIDOS HECHOS</div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {ordered?.map((item) => {
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
