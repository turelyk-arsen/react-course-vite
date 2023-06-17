// import styles from "./Home.module.css";
import {  useState } from "react";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";


const Home = () => {
    // const filteredCars = useMemo(()=> cars.filter(car => car.price > 20000), [])
    const [cars, setCars] = useState(carsData)

  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars}/>
      {cars.length ? cars.map((car) => (
        <CarItem key={car.id} car={car}/>
      )) : <p>There are no cars</p>}
    </div>
  );
};

export default Home;
