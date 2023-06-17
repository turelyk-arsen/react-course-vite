import { useState } from "react";
import styles from "./CreateCarForm.module.css";
// import PropTypes from "prop-types";

const CreateCarForm = ({ setCars }) => {
  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [image, setImage] = useState('')
  const [data, setData] = useState({ name: "", price: "", image: "" });

  const createCar = (e) => {
    e.preventDefault();
    // setCars(prev => [...prev, {id: prev.length+1, name, price, image}])
    setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    setData({ name: "", price: "", image: "" })
  };

//   CreateCarForm.propTypes = {
//     setCars: PropTypes.func.isRequired,
//   };

  return (
    <form className={styles.form}>
      {/* <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      /> */}
      <input
        placeholder="Name"
        onChange={(e) => setData(prev =>({...prev, name:e.target.value}))}
        value={data.name}
      />
      <input
        placeholder="Price"
        onChange={(e) => setData(Number(prev =>({...prev, price:e.target.value})))}
        value={data.price}
      />
      <input
        placeholder="Image"
        onChange={(e) => setData(prev =>({...prev, image:e.target.value}))}
        value={data.image}
      />

      <button className={styles.btn} onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
