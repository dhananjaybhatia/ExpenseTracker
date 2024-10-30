import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext); // Destructure addTransaction

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction); // Call addTransaction from context
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3 className="text-2xl border-2 border-b-slate-300 py-2">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit}>
        <label
          htmlFor="transactionText"
          className="block mt-4 text-lg text-gray-700"
        >
          Transaction Name
        </label>
        <input
          id="transactionText"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-full mt-1 border-box p-4 shadow-lg text-xl"
        />

        <label
          htmlFor="transactionAmount"
          className="block mt-4 text-lg text-gray-700"
        >
          Amount
        </label>
        <input
          id="transactionAmount"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full mt-1 border-box p-4 shadow-lg text-xl"
        />
        <span className="text-gray-500 mt-2 inline-block">
          (+ income, - expense)
        </span>
        <button
          type="submit"
          className="bg-orange-400 w-full mt-5 shadow-lg box-border p-4 text-xl"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
