import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/restricted/data')
      .then(res => {
        console.log(res);
        setRecipes(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe, index) => {
        return (
          <div
            key={index}
            style={{
              border: '1px solid grey',
              margin: '10px',
              display: 'inline-block',
              padding: '20px',
              width: '400px',
              height: '200px',
            }}
          >
            <h3>Today we are preparing {recipe.name}</h3>
            <h3>for the {recipe.course} course </h3>
            <h3>using the {recipe.technique} technique</h3>
          </div>
        );
      })}
    </div>
  );
};
export default RecipeList;
