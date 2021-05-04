import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { glasses, units } from './constants';

function CreateDrink() {
  const [categories, setCategories] = useState([]);
  const [additionalIngredient, setAdditionalIngredient] = useState({
    id: '',
    ingredient: '',
    unit: '',
  });
  const [ingredientCollection, setIngredientCollection] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchDrinkCategories = async () => {
      try {
        const res = await axios.get('/categories', {
          cancelToken: source.token,
        });
        setCategories(res.data);
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };

    fetchDrinkCategories();

    return () => {
      source.cancel();
    };
  }, []);

  const addIngredient = () => {
    const randomNum = Math.random() * 100;
    const uniqId = additionalIngredient.ingredient + randomNum.toString();
    console.log('uniqId: ', uniqId);

    setAdditionalIngredient({
      ...additionalIngredient,
      ...(additionalIngredient.id = uniqId),
    });

    setIngredientCollection([
      ...ingredientCollection,
      ...[additionalIngredient],
    ]);
    console.log('additionalIngredient: ', additionalIngredient);
    setAdditionalIngredient({
      ingredient: '',
      unit: '',
      id: '',
    });
  };

  const deleteIngredient = (ingredient) => {
    console.log('delet ingredient: ', ingredient);
    const updatedList = ingredientCollection.filter((ingr) => {
      console.log('ingr: ', ingr);
      return ingr.id !== ingredient.id;
    });
    console.log('updateList: ', updatedList);
    setIngredientCollection(updatedList);
  };

  return (
    <div>
      <h1>Create Drink</h1>
      <form>
        <section>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"></input>
        </section>

        <section>
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </section>

        <section>
          <label htmlFor="directions">Directions</label>
          <textarea
            id="directions"
            name="directions"
            rows="4"
            cols="50"
          ></textarea>
        </section>

        <section>
          <label htmlFor="Garnish">Garnish</label>
          <input type="text" id="Garnish" name="Garnish"></input>
        </section>

        <section>
          <label htmlFor="glass">Glass</label>
          <select name="glass" id="glass">
            {glasses.map((glass) => {
              return (
                <option value={glass.value} key={glass.value}>
                  {glass.label}
                </option>
              );
            })}
          </select>
        </section>

        <section>
          <label htmlFor="ingredient">Ingredient</label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={(e) =>
              setAdditionalIngredient({
                ...additionalIngredient,
                ingredient: e.target.value,
              })
            }
            value={additionalIngredient.ingredient}
          ></input>
          <label htmlFor="unit">Unit</label>
          <select
            name="unit"
            id="unit"
            onChange={(e) =>
              setAdditionalIngredient({
                ...additionalIngredient,
                unit: e.target.value,
              })
            }
            value={additionalIngredient.unit}
          >
            {units.map((unit) => {
              return (
                <option value={unit.value} key={unit.value}>
                  {unit.label}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={() => addIngredient(additionalIngredient)}
          >
            + Add
          </button>
          <p>
            {additionalIngredient.ingredient} || {additionalIngredient.unit}
          </p>
          <p>-----</p>
          {ingredientCollection.map((ingredient, index) => {
            return (
              <div key={`${ingredient.ingredient}-${index}`}>
                <p>
                  {ingredient.ingredient} -- {ingredient.unit}
                </p>
                <button
                  type="button"
                  onClick={() => deleteIngredient(ingredient)}
                >
                  + Delete
                </button>
              </div>
            );
          })}
        </section>
      </form>
    </div>
  );
}

export default CreateDrink;
