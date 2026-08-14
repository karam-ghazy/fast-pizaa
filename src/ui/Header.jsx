import { Link } from "react-router-dom";
import OrderInput from "../features/order/OrderInput";
import UserName from "../features/user/userName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast Pizza Co.
      </Link>
      <OrderInput />
      <UserName />
    </header>
  );
}

export default Header;
