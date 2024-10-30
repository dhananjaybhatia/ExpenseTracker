import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="bg-slate-50 box-border outline-none shadow-md flex justify-between items-center px-10 py-2">
      <div className="text-2xl p-5">
        <h2>INCOME</h2>
        <h2 className="text-green-600">${income}</h2>
      </div>

      {/* Vertical line separator */}
      <div className="h-12 w-[2px] bg-slate-400 mx-5"></div>

      <div className=" text-2xl">
        <h2>EXPENSE</h2>
        <h2 className="text-red-600">${expense}</h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
