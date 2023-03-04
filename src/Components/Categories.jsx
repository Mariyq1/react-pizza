import React, { useState } from "react";


function Categories (){
  const [activeItem, setActiveItem] = useState(0);
  const categories = ['Maki', 'Sashimi', 'Nigiri', 'Sushi Pizza', 'Combo'];
  const onClickCategories = (index)=>{
    setActiveItem(index)
  }

  return(
  <div className="categories">
    <ul>
      {
        categories.map((value, i, key)=>(
          <li
          onClick={()=>onClickCategories(i)}
          className={activeItem === i ? 'active' : ''}
          key={value}
          >{value}</li>

        ))
      }
      </ul>
  </div>
  )
}
export default Categories;