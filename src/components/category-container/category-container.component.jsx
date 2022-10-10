import "./category-container.styles.scss"
import CategoryItem from "../category-item/category-item.component"

import React from 'react'

function CategoryContainer({list}) {
  return (
    <div className="categories-container">
    {list.map((category) => (
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
  )
}

export default CategoryContainer