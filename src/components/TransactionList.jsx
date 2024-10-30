import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3 className="text-2xl border-2 border-b-gray-300 max-w-full py-2">
        History
      </h3>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
