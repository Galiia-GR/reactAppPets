import itemsData from '../../data/dataItems';
import { ItemsTypes } from '../../interfaces/interface';

type ItemProps = {
  itemObj: ItemsTypes;
};

function List() {
  return (
    <div className="list">
      <ul>
        {itemsData.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObj }: ItemProps) {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: 'line-through' } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button type="button">&times;</button>
    </li>
  );
}

export default List;
