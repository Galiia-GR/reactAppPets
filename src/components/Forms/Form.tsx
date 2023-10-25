import { useState } from 'react';
import Stats from './Stats';
import CheckList from './CheckList';

function Form() {
  const [description, setDecription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!description) return;

    setDecription('');
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handlerSubmit}>
        <h4>What do you need for your cat? Let`s make your own shopping list...</h4>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDecription(e.target.value)}
        />
        <button type="submit">Add</button>
        <Stats />
        <CheckList />
      </form>
    </>
  );
}

export default Form;
