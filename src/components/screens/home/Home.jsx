// import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
// import { cars as carsData } from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { CarService } from "../../../services/car.service";

const Home = () => {
  // const filteredCars = useMemo(()=> cars.filter(car => car.price > 20000), [])
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();
      setCars(data)
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <p>There are no cars</p>
      )}
    </div>
  );
};

export default Home;
