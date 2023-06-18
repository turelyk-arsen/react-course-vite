import axios from "axios";

export const CarService = {
  async getAll() {
    const response = await axios.get("https://fakestoreapi.com/products?limit=5");
    return response.data;
  },
};
