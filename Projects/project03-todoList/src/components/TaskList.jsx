import { useState } from "react";
import TaskItem from "./TaskItem";


export default function TaskList({
    tasks,
    onDeleteTask}
) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <li>
            <TaskItem task={task} />
            <button onClick={onDeleteTask}>Delete</button>
          </li>
        );
      })}
    </>
  );
}