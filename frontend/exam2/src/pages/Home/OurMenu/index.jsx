import React, { useEffect, useState } from "react";
import "./OurMenu.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setBasket, setFavorites } from "../../../redux/slice/menuSlice";
import { useNavigate } from "react-router-dom";

const OurMenu = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/menu")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        "Error", error;
      });
  });

  const handleBasket = (products) => {
    dispatch(setBasket(products));
  };

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <div className="ourmenu">
        <div className="ourmenu-section">
          <div className="menu-left"></div>
          <div className="menu-word">Our Menu</div>
          <div className="menu-right"></div>
          <div className="breakfast"></div>
        </div>
        <div className="breakfast">
          <div className="menu-eat">
            <h3 className="orange">Breakfast</h3>
            <h3>Brunch</h3>
            <h3>Lunch</h3>
            <h3>Dinner</h3>
          </div>
        </div>
        <div className="cards">
          {products.map((product, index) => (
            <div className="card-box" key={index}>
              <div
                className="card-box-first"
                onClick={() => navigate(`detail/${product._id}`)}
              >
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <div className="clear">
                <div className="price">${product.price}</div>
              </div>
              <button
                className="card-button"
                onClick={() => {
                  dispatch(setBasket(product));
                }}
              >
                Add to Basket
              </button>
              <button
                className="card-button"
                onClick={() => {
                  dispatch(setFavorites(product));
                }}
              >
                Favorite
              </button>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
