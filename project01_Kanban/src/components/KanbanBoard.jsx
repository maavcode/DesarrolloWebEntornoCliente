import TaskColumn from "./TaskColumn"
import TaskItem from "./TaskItem"

export default function KanbanBoard({columns}) {
    // Con las columnas que me pase por las props, recogo una lista de columnas 
    const listTaskColumns = columns.map((listTaskColumn) =>
        // Para cada lista de columna creo una TaskColumn a la que le pasare el contenido necesario de esa columna en concreto 
    <TaskColumn title={listTaskColumn.title} tasks={listTaskColumn.tasks}/>
)
        
    

    return(
        <div style={{display: "flex" }}>
            {/* Genero las columnas */}
        {listTaskColumns }
        </div>
    )
}

