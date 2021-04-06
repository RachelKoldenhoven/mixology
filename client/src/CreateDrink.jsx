import React, { Component } from 'react';

class CreateDrink extends Component {
  render() {
    return (
      <div>
        <h1>Create Drink</h1>
        <form>
          <section>
            <label for="name">Name</label>
            <input type="text" id="name" name="name"></input>
          </section>

          <section>
            {/* dynamically pull in values */}
            <label for="category">Category</label>
            <select name="category" id="category">
              <option value="bourbon">Bourbon</option>
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
            {/* dynamically pull in values */}
            <select name="glass" id="glass">
              <option value="rocks">Rocks Glass</option>
              <option value="martini">Martini Glass</option>
              <option value="coupe">Coupe</option>
              <option value="hurricane">Hurricane</option>
            </select>
          </section>
        </form>
      </div>
    );
  }
}

export default CreateDrink;
