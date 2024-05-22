import React from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../redux/slice/menuSlice";
import { useSelector } from "react-redux";
import "./wishlist.scss";

const Wishlist = () => {
  const favorite = useSelector((state) => state.counter.favorite);

  const dispatch = useDispatch();
  return (
    <div>
      <section id="basket">
        <div className="container">
          <div></div>
          {favorite &&
            favorite.map((prod) => {
              return (
                <div className="cardBasket" key={prod._id}>
                  <div className="allText">
                    <h2 className="ha-2">{prod.name}</h2>
                    <p>{prod.description}</p>
                    <p>{prod.price}</p>
                    {/* <button>Delete</button> */}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
