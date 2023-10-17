import CatTypes from './interface';
import data from './dataCats';

type CatProps = {
  catObj: CatTypes;
};

function Cats() {
  const cats = data;
  const numCats = cats.length;
  return (
    <main>
      {numCats > 0 ? (
        <>
          <p className="mainParag">
            Cosmic kittens are not just ordinary domestic furry companions; they embody an ineffable
            charm and mysterious allure. Why are they considered the very best?
          </p>
          <ul className="cats">
            {cats.map((cat) => (
              <Cat catObj={cat} key={cat.id} />
            ))}
          </ul>
        </>
      ) : (
        <p>We`re still looking for nice cats. Please come back later :)</p>
      )}
    </main>
  );
}

function Cat({ catObj }: CatProps) {
  return (
    <li className={`cat ${catObj.soldOut ? 'sold-out' : ''}`}>
      <img src={catObj.photoName} alt={catObj.photoName} />
      <h2>{catObj.name}</h2>
      <p>{catObj.description}</p>
      <span>{catObj.soldOut ? 'sold out' : catObj.price}</span>
    </li>
  );
}

export default Cats;
