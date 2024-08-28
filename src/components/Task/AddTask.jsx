import React, { Fragment } from "react";
import Modal from "../common/Modal";
import AddTaskForm from "./AddTaskForm";
import Plus from "../../assets/icons/Plus.svg";
import useTaskStore from "../../store/task";

function AddTask() {
  const { isShowModal, showModal, taskId } = useTaskStore();

  return (
    <Fragment>
      <div className="footer pointer" onClick={showModal}>
        <img src={Plus} title="Add" alt="Add" />
      </div>
      <Modal
        showModal={isShowModal}
        closeModal={() => showModal()}
        title={`${taskId ? "Edit" : "Add"} Task`}
      >
        <AddTaskForm />
      </Modal>
    </Fragment>
  );
}

export default AddTask;
