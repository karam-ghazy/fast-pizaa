import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li
      className="py-3 sm:flex sm:items-center sm:justify-between"
      key={pizzaId}
    >
      <p className="mt-2">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
