 import React, {useState} from 'react'
 import Axios from 'axios'
import Recipe from './components/recipe'
import {v4 as uuidv4} from 'uuid';
import Alert from './components/alert'
import './App.css';

function App() {

  const [query, setQuery]=useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState()

  const APP_ID="2d337c1f";
  const APP_KEY="8df46ff29d55de10db127263a276830a";

  
const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
 
const getData = async()=>{
  
  if(query !== ""){
    const result = await Axios.get(url);
    if(!result.data.more){
      return setAlert("No food with such name")
    }
    console.log(result)
    setAlert(' ')
    setQuery("");
    setRecipes(result.data.hits)
  } else {
    setAlert('Please fill the form')
  }

}

const onSubmit = e =>{
e.preventDefault(); 
getData();

};
const onChange = e =>{
  setQuery(e.target.value)
}
  return (
    <div className="app">
      <h1 onClick={getData}>Food searching app </h1>
      {alert !=="" && <Alert alert = {alert}/>}
      <form className="search-form" onSubmit={onSubmit}>
     
        <input type="text" placeholder="search food" autoComplete="off" onChange={onChange} value={query}/> 
        <input type="submit" className="input-two" value ="search"/>  
      </form>
      <div className="recipes">
        {recipes!== []&& recipes.map(recipe=> 
        <Recipe key ={uuidv4()} recipe = {recipe}/>)}
      </div>

    </div>
  );
}

export default App;
