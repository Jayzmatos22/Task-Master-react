import { useState } from "react";
import Tasks from "./components/Tasks";
import EdgeTopApp from "./components/EdgeTopApp";
import "./App.css";
import {CircleFadingPlus } from "lucide-react";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([])

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onAddTask(newTaskTitle){

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      isCompleted: false
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }
  

  return (
    /* CORPO PÁGINA */
    <div className="flex justify-center items-center p-6 h-screen w-screen overflow-hidden">
      <EdgeTopApp />
      <div className="w-150 flex flex-col items-center">
        <h1 className="text-3xl text-slate-100 mt-21 font-bold justify-center appTitle antialiased">
          Gerenciador de Tarefas 🚀
        </h1>

        
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTask}
          onAddTaskClick={onAddTask}
        />

        <div className="flex flex-col gap-3 items-center mt-6 w-96">
          <label htmlFor="inputTask" className="text-white flex gap-2 font-black ">
          <CircleFadingPlus className="addIcon"/>  Qual a próxima tarefa?
            
          </label>

          <input
            type="text"
            value={title}
            onChange={(eventt) => setTitle(eventt.target.value)}
            className="inputTask border-2 border-slate-700 bg-slate-800 text-white rounded-md p-3 w-full"
            placeholder="Nome da tarefa"
          />
          <button 
            onClick={() => {
              // Evita que o usuário adicione uma tarefa em branco sem querer
              if (title.trim() === "") return; 

              //  -> App.jsx
              onAddTask(title);

              //  Limpa a caixa de texto:
              setTitle(""); 
            }}
            className="bg-emerald-500 text-white font-bold p-3 cursor-cell rounded-md hover:bg-emerald-600 transition-all"
          >
            Adicionar
          </button>
        </div>
      </div>

      
    </div>
    
  );
}

export default App;
