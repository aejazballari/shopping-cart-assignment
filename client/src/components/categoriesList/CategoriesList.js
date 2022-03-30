import React from 'react'
import CategoryItem from '../categoryItem/CategoryItem'
import './categoriesList.scss'

const CategoriesList = ({categories}) => {
    const newArray = categories.sort((a, b) => {
      return a.order - b.order
    }
    ).filter(item => item.order>0)
    
  return (
         <>
            {
                newArray.map((item) => {
                    return <div className='categories'>
                        <CategoryItem category={item}/>
                    </div>
                    
                })
                }
       </>
  )
}

export default CategoriesList