import React from "react";


function Categories ({value, onClickCategory}){
  const categories = [ 'All','Sashimi', 'Nigiri', 'Sushi Pizza', 'Combo'];
  return(
  <div className="categories">
    <ul>
      {
        categories.map((categoryName, i)=>(
          <li
          onClick={()=>onClickCategory(i)}
          className={value === i ? 'active' : ''}
          key={i}
          >{categoryName}</li>
        ))
      }
      </ul>
  </div>
  )
}
export default Categories;