import { Link } from "react-router-dom";
import styles from "../Home.module.css";
// import PropTypes from "prop-types";

const CarItem = ({ car }) => {
  // CarItem.propTypes = {
  //   car: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     image: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //   }).isRequired,
  // }; 
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${car.image})` }}
      />
      {/* <img src='/1.jfif' alt='car'/> */}
      <div className={styles.info}>
        <h2>{car.title}</h2>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <Link className='btn' to={`car/${car.id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default CarItem;
