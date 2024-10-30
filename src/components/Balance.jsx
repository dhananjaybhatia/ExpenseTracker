import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <div className="">
      <h4 className="text-xl mt-4">YOUR BALANCE</h4>
      <h1 className="text-3xl">${total}</h1>
    </div>
  );
};

export default Balance;
