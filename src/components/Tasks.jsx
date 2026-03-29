import {Ellipsis, TrashIcon, ClipboardList } from "lucide-react";
import "./Tasks.css";
import { useState, useEffect } from "react";

function Tasks(props) {
  const [detailedTask, setDetailedTask] = useState(null)


  useEffect(() => {
    if (detailedTask){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [detailedTask]);
  


  return (
    <>
      <div className="p-6 relative rounded-lg shadow-lg w-full text-center mt-5 tasks-container">
        <h2 className="text-white font-extrabold text-2xl mb-4 taskTitle rounded-full">
          Minhas Tarefas
        </h2>

        
        {props.tasks.length === 0 ? (
          
          <div className="flex flex-col items-center justify-center p-6 text-slate-400">
            <ClipboardList size={48} className="mb-4 opacity-80" />
            <p className="text-lg font-medium text-red-900">Você ainda não tem tarefas.</p>
            <p className="text-sm text-black">Que tal adicionar uma agora mesmo?</p>
          </div>

        ) : (

          // HÁ TAREFAS.
          <ul className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {props.tasks.map((task) => (
              <li key={task.id} className="flex m-1.5 gap-3 text-left gap-x-3">
                <button
                  onClick={() => props.onTaskClick(task.id)}
                  className={`flex-1 hover:cursor-vertical-text bg-slate-900/80 text-white p-3 truncate text-left rounded-md shadow flex justify-between ${
                    task.isCompleted ? "line-through text-red-700" : ""
                  }`}
                >
                  {task.title}
                </button>

                <button
                  onClick={() => setDetailedTask(task)}
                  className="bg-slate-700 border-2 border-blue-600 cursor-grabbing hover:bg-blue-950/15 text-white rounded-full p-3 hover:text-blue-800 hover:scale-105 transition-all"
                >
                  <Ellipsis />
                </button>

                <button
                  onClick={() => props.onDeleteTaskClick(task.id)}
                  className="bg-slate-700 cursor-grabbing border-2 border-red-600 hover:bg-red-950/15 text-white rounded-full p-3 hover:text-red-800 hover:scale-105 transition-all"
                >
                  <TrashIcon />
                </button>
              </li>
            ))}
          </ul>
        )} 
        

      </div>

      {/* DETALHES DE CADA TAREFA (MODAL)  */}
      {detailedTask && (
        <div className="fixed p-4 inset-0 z-50 flex justify-center backdrop-blur-sm bg-green/90 items-center">
          <div className="bg-slate-800 cointainer-modal border-3 border-green-600 w-[90vw] max-w-lg max-h-[85vh] text-center relative p-5 flex flex-col rounded-md">
            <p className="flex text-2xl shrink-0 antialised text-white items-center gap-2 border-b border-green-300 pb-2 w-full mt-2 text-center font-black mb-4">
              <ClipboardList className="taskIcon" /> Detalhes da Tarefa
            </p>

            {/* Tarefa completa */}
            <div className="bg-gray-300 text-blue-950 p-2 rounded-md whitespace-normal wrap-break-word overflow-y-auto min-h-0 custom-scrollbar text-left flex-1">
              {detailedTask.title}
            </div>

            <button
              onClick={() => setDetailedTask(null)}
              className="bg-red-700 mt-7 hover:bg-red-900 shrink-0 cursor-pointer text-white font-bold py-3 px-4 rounded-lg w-full transition-all"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Tasks;