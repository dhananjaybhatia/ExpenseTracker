import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="w-full min-h-screen flex justify-center items-center bg-slate-200">
        <div className="w-full max-w-md p-5 flex flex-col font-semibold space-y-5">
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
