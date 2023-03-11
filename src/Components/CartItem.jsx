import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartSlice";

const CartItem = ({id, title,size, price,type, count, imageURL})=>{
    const dispatch = useDispatch();
    const onClickPlus = ()=>{
        dispatch(addItem({
            id
        }));

    }
    const onClickMinus = ()=>{
        dispatch(minusItem(id));
    }
    const onClickRemove = ()=>{
        if(window.confirm('Are you sure?')){
            dispatch(removeItem(id))
        }
    }
    return(
        <div className="cart__item">
            <div className="cart__item-img">
            <img
                src={imageURL}
                className="sushi-block__image"
                alt="Maki"
            />
            </div>
                <div className="cart__item-info">
                <h3>{title}</h3>
                <p>{type}, {size} </p>
                </div>
                <div className="cart__item-count">
                    <div className="button button--outline button--circle cart__item-count-minus"
                    onClick={onClickMinus}>
                    -
                    </div>
                <b>{count}</b>
                    <div className="button button--outline button--circle cart__item-count-plus"
                    onClick={onClickPlus}>
                    +
                    </div>
                </div>
                <div className="cart__item-price">
                <b>{price * count} $</b>
                </div>
                <div className="cart__item-remove">
                <div className="button button--outline button--circle"
                onClick={onClickRemove}>
                        X
                </div>
                </div>
        </div>
    )
}
export default CartItem;