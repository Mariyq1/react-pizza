import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addItem, selectCartItem} from '../../redux/slices/cartSlice';


const typeNames = ['normal' , 'spicy']
function SushiBlock ({id,title, price,imageURL,size,types}){
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItem(id))
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize]=useState(0);
    const addedCount = cartItem ? cartItem.count :0;
    const onClickAdd=()=>{
        const item = {
            id,
            title,
            price,
            imageURL,
            type: typeNames[activeType],
            size: size[activeSize]
        }
        dispatch(addItem(item));
    }
    return(
        <div className="sushi-block__wrapper">
            <div className="sushi-block">
            <img
             className="sushi-block__image"
             src={imageURL}
             alt="Maki-first"
            />
            <h4 className="sushi-block__title">{title}</h4>
            <div className="sushi-block__selector">
                <ul>
                   {types.map((type)=>(
                    <li 
                        className={activeType===type? 'active':""}
                        onClick={()=>setActiveType(type)}
                        key={type}
                        >{typeNames[type]}
                    </li>
                    ))}
                </ul>
                <ul>
                    {size.map((size, i)=>(
                        <li
                            className={activeSize === i? 'active':""}
                            onClick={()=>setActiveSize(i)}
                            key={size}
                            >{size} pcs
                        </li>
                        ))}
                </ul>
            </div>
            <div className="sushi-block__bottom">
                <div className="sushi-block__price">from {price}$</div>
                <button 
                    className="button button--outline button--add"
                    onClick={onClickAdd}>
                    <span>Add</span>
                    <i>0</i>
                </button>
            </div>
        </div>
        </div>
    )
}
export default SushiBlock;