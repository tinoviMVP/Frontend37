import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import "./index.css"
import { CurrencyConverter } from "./components/CurrencyConverter";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = () => {
    dispatch({type:"ADD_CASH", payload:Number(prompt("Введите сумму"))})
  }

  const getCash = () => {
    dispatch({type:"GET_CASH", payload:Number(prompt("Введите сумму"))})
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Баланс: {cash} сум</h1>
        <div className="btnContainer">
          <button onClick={()=>addCash()}>Добавить деньги</button>
          <button onClick={()=>getCash()}>Снять деньги</button>
        </div>
      </div>
      <CurrencyConverter/>
    </div>
  );
}

export default App;
