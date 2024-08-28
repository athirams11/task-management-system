import React, { Fragment } from "react";
import Accordion from "../common/Accordion";
import TaskList from "./TaskList";
import useTaskStore from "../../store/task";
import { statusMap } from "../../utils/status";
import FilterItems from "./FilterItems";
import AddTask from "./AddTask";
import "./style.css";

const groupTasksByStatus = (tasks) => {
  return tasks.reduce((acc, task) => {
    const statusGroup = acc.find((group) => group.status === task.status);
    if (statusGroup) {
      statusGroup.tasks.push(task);
    } else {
      acc.push({ status: task.status, tasks: [task] });
    }
    return acc;
  }, []);
};

function Task() {
  const { tasks, searchTerm } = useTaskStore();

  const filteredItems = tasks?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const groupedTasks = groupTasksByStatus(filteredItems);

  return (
    <Fragment>
      {tasks.length > 0 && <FilterItems />}
      {groupedTasks?.length > 0 &&
        groupedTasks.map(({ status, tasks }) => (
          <Accordion
            key={status}
            title={
              <Fragment>
                {statusMap[status]} <span>({tasks.length})</span>
              </Fragment>
            }
          >
            <TaskList data={tasks} />
          </Accordion>
        ))}
      <AddTask />
    </Fragment>
  );
}

export default Task;
