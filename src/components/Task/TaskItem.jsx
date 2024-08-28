import React from "react";
import Pencil from "../../assets/icons/Pencil.svg";
import Trash from "../../assets/icons/Trash.svg";
import useTaskStore from "../../store/task";
import { formatCustomDate } from "../../utils/formatDate";
import { statusMap } from "../../utils/status";

function TaskItem({ task }) {
  const { showModal, setTaskId, deleteTask } = useTaskStore();
  const { title, status, description, date, id } = task;

  return (
    <div className="list-item pointer">
      <div className="list-item-icon">{title?.charAt(0).toUpperCase()}</div>
      <div className="list-item-content">
        <div className="flex sb">
          <div className="list-item-title">{title}</div>
          <div className="flex sb center">
            <div className={`list-item-color status ${status}`}></div>
            <span className="list-item-status">{statusMap[status]}</span>
          </div>
        </div>
        <div className="list-item-description">{description}</div>
        <div className="flex sb center">
          <div className="list-item-date">{formatCustomDate(date)}</div>
          <div className="list-item-icons">
            <img
              src={Pencil}
              title="Edit"
              alt="Edit"
              onClick={() => {
                showModal();
                setTaskId(id);
              }}
            />
            <img
              src={Trash}
              title="Delete"
              alt="Delete"
              onClick={() => {
                deleteTask(id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
