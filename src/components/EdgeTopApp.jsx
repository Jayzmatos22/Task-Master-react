
import { ListTodo } from "lucide-react";

function EdgeTopApp() {
    return (
    <header className="fixed top-0 left-0 w-full bg-slate-700 border-b border-slate-700 p-4 z-10 shadow-md">
        <div className="topDiv w-fit px-6 py-2 flex gap-4 rounded-md items-center whitespace-nowrap">
            <ListTodo className="text-emerald-400 hover:translate-y-0.5 hover:shadow-green-800 duration-300 transition-all" size={50} />
            <h1 className="antialised flex edgeTitle tracking-wider"> Task Master
                
            </h1>
        </div>
        <div className="topMenu absolute right-3.5 top-0.5">
            <ul className="text-white antialised p-1 rounded-full right-0 pr-7 pl-7 space-y-1.5">
                <li>Home</li>
                <li>About</li>
                <li>Perfil</li>
            </ul>
        </div>
    </header>
  );
}

export default EdgeTopApp;