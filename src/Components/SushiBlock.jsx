import React from "react";
import maki1 from "../img/maki1.jpg"


function SushiBlock (){
    return(
        <div class="sushi-block">
            <img
             className="sushi-block__image"
             src={maki1}
             alt="Maki-first"
            />
            <h4 className="sushi-block__title">Maki-sushi</h4>
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
                <div className="sushi-block__price">from 25$</div>
                <div className="button button--outline button--add">
                    <span>Add</span>
                </div>
            </div>
        </div>
    )
}
export default SushiBlock;