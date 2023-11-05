import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLog } from "../redux/actions/actionCreator";

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
    </form>
  );
};
