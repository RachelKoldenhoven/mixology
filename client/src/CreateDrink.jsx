import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { glasses } from './constants';

function CreateDrink() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div>
      <h1>Create Drink</h1>
      <form>
        <section>
          <label for="name">Name</label>
          <input type="text" id="name" name="name"></input>
        </section>

        <section>
          <label for="category">Category</label>
          <select name="category" id="category">
            {categories.map((category) => {
              return <option value={category.id}>{category.name}</option>;
            })}
          </select>
        </section>

        <section>
          <label for="directions">Directions</label>
          <textarea
            id="directions"
            name="directions"
            rows="4"
            cols="50"
          ></textarea>
        </section>

        <section>
          <label for="Garnish">Garnish</label>
          <input type="text" id="Garnish" name="Garnish"></input>
        </section>

        <section>
          <label for="glass">Glass</label>
          <select name="glass" id="glass">
            {glasses.map((glass) => {
              return <option value={glass.value}>{glass.label}</option>;
            })}
          </select>
        </section>
      </form>
    </div>
  );
}

export default CreateDrink;
