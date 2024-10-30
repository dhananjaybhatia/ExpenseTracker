/* eslint-disable react/prop-types */
import { XCircleIcon } from "@heroicons/react/24/solid";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const dotColor = transaction.amount < 0 ? "bg-red-500" : "bg-green-500";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="group relative mt-3 ">
      <XCircleIcon
        onClick={() => deleteTransaction(transaction.id)}
        className="w-5 h-5 text-red-500 cursor-pointer absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
      <div className="box-border bg-slate-50 shadow-lg p-4 text-xl flex justify-between items-center">
        <div className="flex items-center">
          {/* Dot in front of the text */}
          <span className={`w-3 h-3 rounded-full ${dotColor} mr-2`} />
          <h3>{transaction.text}</h3>
        </div>
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>
    </div>
  );
};

export default Transaction;
