import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import "./index.css";

export function Tarefa({ name }) {
  const [Terminado, setTerminado] = useState(false);
  return (
    <>
      <div className={Terminado ? "tarefa terminado" : "tarefa"}>
        <h1>{name}</h1>

        <div className="icons">
          <Check
            onClick={() => setTerminado(true)}
            size={32}
            className="icon"
          />

          {/* <X size={32} className="icon" /> */}
        </div>
      </div>
    </>
  );
}
