import TaskColumn from "./TaskColumn"
import TaskItem from "./TaskItem"

export default function KanbanBoard({columns}) {
    
   const listTaskColumns = columns.map((listTaskColumn) =>
    <TaskColumn title={listTaskColumn.title} tasks={listTaskColumn.tasks}/>
)
        
    

    return(
        <div style={{display: "flex" }}>
            
        {listTaskColumns }
        </div>
    )
}

