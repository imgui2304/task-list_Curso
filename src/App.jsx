import { useState } from "react";
import "./App.css";
import Tarefa from "./components/Tarefa";

function App() {
  const [Tarefas, setTarefas] = useState([""]);
  const [NomeDaTarefa, setNomeDaTarefa] = useState("");
  function AdicionarTarefa() {
    // Código
  }
  return (
    <>
      <main className="container">
        <h1>Lista de Tarefas</h1>
        <div className="container_tarefas">
          <header className="criados_tarefas">
            <input type="text" placeholder="Digite o nome da sua tarefa" />
            <button onClick={() => AdicionarTarefa()}>+</button>
          </header>

          <div className="lista_tarefas">
            {/* Componente da Tarefa */}
            <Tarefa name="Tarefa 1" />
            <Tarefa name="Tarefa 1" />
            <Tarefa name="Tarefa 1" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
