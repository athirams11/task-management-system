import React, { useState } from "react";
import useTaskStore from "../../store/task";
import StatusDropdown from "../common/StatusDropdown";
import { statusOptions } from "../../utils/status";

function AddTaskForm() {
  const { addTask, showModal, updateTask, taskId, tasks } = useTaskStore();

  const task = taskId ? tasks.find((data) => data.id === taskId) : {};
  const taskData = {
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "pending",
  };

  const [taskForm, setTaskForm] = useState(taskData);

  const handleAddTask = () => {
    const { title, description, status } = taskForm;
    const task = {
      id: Date.now(),
      title,
      description,
      status,
      date: new Date(),
    };

    if (title.trim()) {
      if (taskId) {
        updateTask(taskId, task);
      } else {
        addTask(task);
      }
      setTaskForm(taskData);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setTaskForm((state) => ({ ...state, [name]: value }));
  };

  const handleStatusSelect = (status) => {
    setTaskForm((state) => ({ ...state, status }));
  };

  return (
    <div className="flex col mb-2">
      <input
        type="text"
        placeholder="Enter the title"
        name="title"
        value={taskForm.title}
        onChange={onChange}
      />
      <textarea
        placeholder="Enter the description"
        name="description"
        value={taskForm.description}
        onChange={onChange}
      />
      {taskId && (
        <StatusDropdown
          options={statusOptions}
          value={taskForm.status}
          onSelect={handleStatusSelect}
        />
      )}
      <div className="flex sb mb-2">
        <button className="secondary" onClick={() => showModal()}>
          Cancel
        </button>
        <button className="primary" onClick={handleAddTask}>
          {taskId ? "Update" : "ADD"}
        </button>
      </div>
    </div>
  );
}

export default AddTaskForm;
