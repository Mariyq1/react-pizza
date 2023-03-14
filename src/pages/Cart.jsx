import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { clearItems, selectCart } from "../redux/slices/cartSlice";
import CartEmpty from "../Components/CartEmpty";
const Cart = () =>{
    const dispatch = useDispatch();
    const {totalPrice,items} = useSelector(selectCart)
    const totalCount = items.reduce((sum, item)=>sum+item.count, 0)
    const onClickClear = ()=>{
        if(window.confirm('Clear all?')){
            dispatch(clearItems())
        }
    }
    if(!totalPrice){
        return <CartEmpty/>
    }
    return(
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title"> 	🛒Cart</h2>
              <div 
              onClick={onClickClear}
              className="cart__clear">
                <span>Clear Cart</span>
              </div>
                </div>
                <div className="content">
                   
                    {
                        items.map((item)=><CartItem key={item.id} {...item}/>)
                    }
                </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> All: <b>{totalCount} шт.</b> </span>
                                <span> Order price: <b>{totalPrice} $</b> </span>
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