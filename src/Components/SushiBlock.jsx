import React, { useState } from "react";
import maki1 from "../img/maki1.jpg"


function SushiBlock ({title, price}){
    const [sushiCount, setSushiCount] = useState(0);
    const onClickAdd=()=>{
       setSushiCount(sushiCount+1)
    }
    return(
        <div className="sushi-block">
            <img
             className="sushi-block__image"
             src={maki1}
             alt="Maki-first"
            />
            <h4 className="sushi-block__title">{title}</h4>
            <div className="sushi-block__selector">
                <ul>
                    <li className="active">
                        Normal
                    </li>
                    <li>
                        Big
                    </li>
                </ul>
            </div>
            <div className="sushi-block__bottom">
                <div className="sushi-block__price">from {price}$</div>
                <button 
                    className="button button--outline button--add"
                    onClick={onClickAdd}>
                    <span>Add</span>
                    <i>{sushiCount}</i>
                </button>
            </div>
        </div>
    )
}
export default SushiBlock;