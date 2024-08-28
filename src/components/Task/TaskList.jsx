import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ data }) {
  return (
    <div className="list-container">
      {data &&
        data.length &&
        data.map((task, index) => <TaskItem key={index} task={task} />)}
    </div>
  );
}

export default TaskList;
