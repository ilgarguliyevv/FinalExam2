import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  removeAllBasket,
  removeBasket,
  setBasket,
} from "../../redux/slice/menuSlice";

const Basket = () => {
  const basket = useSelector((state) => state.counter.basket);

  const dispatch = useDispatch();
  return (
    <div>
      <section id="basket">
        <div className="container">
          <div>
            <button onClick={() => dispatch(removeAllBasket(prod))}>
              remove all
            </button>
          </div>
          {basket &&
            basket.map((prod) => {
              return (
                <div className="cardBasket" key={prod._id}>
                  <div className="allText">
                    <h2>{prod.name}</h2>
                    <p>{prod.description}</p>
                    <p>{prod.price}</p>
                    <div className="buttons">
                      <div className="counts">
                        <button
                          onClick={() => {
                            dispatch(decreaseCount(prod));
                          }}
                        >
                          -
                        </button>
                        <p>{prod.count}</p>
                        <button
                          onClick={() => {
                            dispatch(setBasket(prod));
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            dispatch(removeBasket(prod));
                          }}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Basket;
