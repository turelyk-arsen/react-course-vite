// import styles from "./Home.module.css";
import CarItem from "./car-item/CarItem";
import { cars } from "./cars.data";


const Home = () => {
  return (
    <div>
      <h1>Cars catalog</h1>
      {cars.length ? cars.map((car) => (
        <CarItem key={car.id} car={car}/>
      )) : <p>There are no cars</p>}
    </div>
  );
};

export default Home;
