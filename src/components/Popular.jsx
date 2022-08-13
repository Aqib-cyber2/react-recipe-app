import { useState, useEffect } from 'react';

function Popular() {

  // creating states. Use Arrow Function in useState hook to execute only once for better performance.
  const [popular_recipe, setPopularRecipe] = useState( ()=> [] )

  // useEffect hook for side effect of component.
  useEffect(()=>{
    getPouplarRecipe()
  }, []) //[] means execute only once and not execute afte revery render

  // popular recepe function
  const getPouplarRecipe = async ()=>{
    let res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=9`)
    let data = await res.json()
    setPopularRecipe(data.recipes)
  }

  return (
    <div>
      {
        // popular_recipe.map((recipe)=>{
        //   return (
        //     <p> {recipe.title} </p>
        //   )
        // })
      }
    </div>
  )
}

export default Popular