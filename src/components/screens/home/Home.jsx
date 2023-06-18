// import styles from "./Home.module.css";
import { useContext, useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
// import { cars as carsData } from "./cars.data";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { CarService } from "../../../services/car.service";
import { AuthContext } from "../../../providers/AuthProvider";

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

const {user, setUser} = useContext(AuthContext);

  return (
    <div>
      <h1>Cars catalog</h1>

      {user ? (
        <>
        <h2>Welcome, {user.name}!</h2>
        <button className='btn' onClick={() =>setUser(null)}>Logout</button>
        </>
      ) : (
        <button className='btn' onClick={() =>setUser({name: 'Max',})}>Login</button>
      )}

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
