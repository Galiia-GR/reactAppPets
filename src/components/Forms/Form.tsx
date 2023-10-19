import { useState } from 'react';
import List from './List';
import Stats from './Stats';

function Form() {
  const [description, setDecription] = useState('');
  function handlerSubmit(e: Event) {
    e.preventDefault();
  }

  return (
    <>
      <form className="add-form" onSubmit={handlerSubmit}>
        <h4>What do you need for your cat? Let`s make your own shopping list...</h4>
        <select>
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Item..." />
        <button type="button">Add</button>
      </form>
      <List />
      <Stats />
    </>
  );
}

export default Form;
