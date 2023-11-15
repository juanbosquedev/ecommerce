import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLog } from "../../redux/actions/actionCreator";

export const Login = () => {
  const dispatch = useDispatch();
  const userLogs = useSelector((state) => state.userLogged.logged);

  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault(), 
    dispatch(userLog(user));
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="user"
          name="user"
          placeholder="user name"
          value={user.user}
          onChange={onInputChange}
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={onInputChange}
        ></input>
      </div>
    <button type="submit" onClick={onSubmit} className="btn btn-primary">
    Ingresar
  </button>
  {userLogs === false && <p>datos incorrectos</p>}
    <div className="modal" tabIndex="-1">
      </div>

      
    </form>
    

  );
};
  //   <div className="modal" tabIndex="-1">
        
  //   <div className="modal-dialog">
  //     <div className="modal-content">
  //       <div className="modal-header">
  //         <h5 className="modal-title">Modal title</h5>
  //         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //       </div>
  //       <div className="modal-body">
  //         <p>Modal body text goes here.</p>
  //       </div>
  //       <div className="modal-footer">
  //         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //         <button type="button" className="btn btn-primary">Save changes</button>
     
  //       </div>
  //     </div>
  //   </div>
  // </div>