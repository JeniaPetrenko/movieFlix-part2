import { IMovie } from "../Models/IMovie";
import { IShow } from "../Models/IShow";
import Item from "./Item";

type ItemListProps = {
  items: IMovie[] | IShow[];
};

const ItemsList = ({ items = [] }: ItemListProps) => {
  if (!items || items.length === 0) {
    return <p>No items to display</p>;
  }
  return (
    <section className="grid">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
export default ItemsList;
