import React, {useState} from 'react'
import Ingredient from './ingredient';
import  './recipe.css'

const Recipe = ({recipe}) => {
  const [show, setShow] = useState(false)
  const {label,image,url,ingredients} = recipe.recipe;

  return (
    
    <div className='recipe'>
      <h2>{label}</h2>
      <img src={image} alt={label}/>
      <a href={url} target='_blank' rel='noopener noreferrer'>
              url </a>
              <button onClick={() => setShow(!show)} >ingredients</button> 
              {show && <Ingredient ingredients={ingredients} />}
      </div>
      
  )
}

export default Recipe
