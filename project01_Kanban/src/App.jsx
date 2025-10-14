import './App.css'
import KanbanBoard from './components/KanbanBoard'
import TaskItem from './components/TaskItem';

const initialBoardData = [
  {
    id: "c1",
    title: "Por Hacer",
    tasks: [
      {
        id: "t1",
        title: "Diseñar logo",
        priority: "Alta",
        dueDate: "2025-10-10",
      },
      {
        id: "t2",
        title: "Escribir contenido web",
        priority: "Media",
        dueDate: "2025-10-15",
      },
    ],
  },
  {
    id: "c2",
    title: "En Progreso",
    tasks: [
      {
        id: "t3",
        title: "Configurar servidor",
        priority: "Alta",
        dueDate: "2025-10-08",
      },
    ],
  },
  {
    id: "c3",
    title: "Completado",
    tasks: [], // ¡Aquí puedes probar el renderizado condicional de "Columna vacía"!
  },
];

function App() {

    const taskPrueba = initialBoardData[0].tasks[0];
    return(
        <div>
            <header>
                <h1>Tablero Kanban</h1>
            </header>
            <main >
                <KanbanBoard columns={initialBoardData}/>
            </main>
        </div>
    )
}

export default App
