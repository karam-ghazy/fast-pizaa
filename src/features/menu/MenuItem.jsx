import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentPizzaQuantity } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentPizzaQuantity(id));
  const isInCart = currentQuantity > 0;

  function handleAddNewItem() {
    if (soldOut) return null;

    const newPizzaItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newPizzaItem));
  }

  return (
    <li className="flex gap-4 py-2" key={id}>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(",")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500 line-through">
              Sold out
            </p>
          )}

          {isInCart && <DeleteItem pizzaId={id} />}

          {!soldOut && !isInCart && (
            <Button
              type="small"
              onClick={(e) => {
                e.preventDefault();
                handleAddNewItem();
              }}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
