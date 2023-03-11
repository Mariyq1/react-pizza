import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../img/emptyCart.png"

const CartEmpty = ()=>{
    return(
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Empty Cart <icon>😕</icon></h2>
            <p>
              You probably haven't ordered any sushi yet.<br />
              To order sushi go to the main page
            </p>
            <img src={emptyCart} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Go back</span>
            </Link>
          </div>
        </div>
    )
}
export default CartEmpty;