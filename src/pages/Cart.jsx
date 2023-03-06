import React from "react";
import { Link } from "react-router-dom";

const Cart = () =>{
    return(
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title"> 	🛒Cart</h2>
              <div className="cart__clear">
                <span>Clean Cart</span>
              </div>
                </div>
                <div className="content">
                    <div class="cart__item">
                        <div className="cart__item-img">
                        <img
                        className="sushi-block__image"
                        src="https://i.pinimg.com/564x/a3/e9/5b/a3e95ba535128b34b84c7571c67ae86d.jpg"
                        alt="Maki"
                         />
                        </div>
                         <div className="cart__item-info">
                            <h3>Maki</h3>
                             <p>Normal, 6 </p>
                        </div>
                            <div className="cart__item-count">
                                <div className="button button--outline button--circle cart__item-count-minus">
                                    -
                                </div>
                                <b>2</b>
                                <div className="button button--outline button--circle cart__item-count-plus">
                                    +
                                </div>
                            </div>
                                <div className="cart__item-price">
                                    <b>770 $</b>
                                </div>
                                    <div className="cart__item-remove">
                                        <div className="button button--outline button--circle">
                                            X
                                        </div>
                                    </div>
                    </div>
                </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> All: <b>3 шт.</b> </span>
                                <span> Order price: <b>900 $</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link to="/" className="button button--outline button--add go-back-btn">
                                    <span>Back</span>
                                </Link>
                                    <div className="button pay-btn">
                                        <span>Pay now</span>
                                    </div>
                            </div>
                        </div>
            </div>
    </div>)
}
export default Cart