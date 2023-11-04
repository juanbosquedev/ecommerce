import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Card } from "../components/Card";
import { addOrder, deleteOrder, get_all } from "../redux/actions/actionCreator";

export const Products = ({ logged }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(get_all());
  }, [logged]);

  const handleAdd = (prodd) => {
    
    dispatch(addOrder(prodd));
  };
  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <>
      <div>Compras</div>
      <hr />
      {product?.map((prod) => {
        return (
          <Card
            key={prod.id}
            imagen={prod.image}
            titulo={prod.title}
            descripcion={prod.description}
            precio={prod.price}
            logged={logged}
            handleAdd={() => handleAdd(prod)}
            handleDelete={() => handleDelete(prod.id)}
          />
        );
      })}
    </>
  );
};
Products.Prototype = {
  logged: PropTypes.bool,
  handleAdd: PropTypes.func,
};
