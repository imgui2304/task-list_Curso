import { useState } from "react";
import "./App.css";
import { Tarefa } from "./components/Tarefa";

function App() {
  const [TarefaNome, setTarefaNome] = useState("");
  const [Tarefas, setTarefas] = useState([]);

  function AdicionarTarefa() {
    if (!TarefaNome) {
      alert("Coloque o nome da tarefa!");
      console.log(TarefaNome);
      return;
    }

    setTarefas((tarefas) => [...tarefas, TarefaNome]);
  }
  return (
    <>
      <main className="container">
        <h1>Lista de Tarefas</h1>
        <div className="container_tarefas">
          <header className="criados_tarefas">
            <input
              type="text"
              value={TarefaNome}
              onChange={(event) => setTarefaNome(event.target.value)}
              placeholder="Digite o nome da sua tarefa"
            />
            <button onClick={() => AdicionarTarefa()}>+</button>
          </header>

          <div className="lista_tarefas">
            {Tarefas.map((TarefasNome, i) => {
              return <Tarefa key={i} name={TarefasNome} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
