import { useState } from "react";
import "./Tarefa.css";
function Tarefa({ name }) {
  const [Feito, setFeito] = useState(false);
  return (
    <div className="tarefa">
      <h1 className={Feito ? "feito" : ""}>{name}</h1>
      <button onClick={() => setFeito(true)}>Feito</button>
    </div>
  );
}
export default Tarefa;
