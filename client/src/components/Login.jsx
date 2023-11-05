import { useDispatch } from "react-redux";
import { useState } from "react";
import { userLog } from "../redux/actions/actionCreator";

export const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    mail: "",
    logged: "m",
    type: "",
  });

  const handleLogin = async (name, mail) => {
    if (
      (name === "admin" && mail === "adminpass") ||
      (name === "user" && mail === "userpass")
    ) {
      setUser({ ...user, type: name, logged: true });
    } else {
      setUser({ ...user, logged: false });
    }
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault(), 
    handleLogin(user.name, user.mail);
    if(user.logged===true){

      dispatch(userLog(user))
    }
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
          id="name"
          name="name"
          placeholder="user o admin"
          value={user.name}
          onChange={onInputChange}
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="mail" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="mail"
          name="mail"
          placeholder="userpass o adminpass"
          value={user.mail}
          onChange={onInputChange}
        ></input>
      </div>

      <button type="button" onClick={onSubmit} className="btn btn-primary">
        Ingresar
      </button>
      {!user.logged && <p>datos incorrectos</p>}
    </form>
  );
};
