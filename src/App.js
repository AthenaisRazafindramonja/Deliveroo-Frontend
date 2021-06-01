import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Logo from "./img/Deliveroo_logo.png";

import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-athenais.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="info-restau">
        <div className="description">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt={data.picture} />
      </div>
      <Category data={data.categories} />
    </div>
  );
}

export default App;
