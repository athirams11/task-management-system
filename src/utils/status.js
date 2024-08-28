const statusOptions = [
  { name: "Pending", value: "pending" },
  { name: "In Progress", value: "inprogress" },
  { name: "Completed", value: "completed" },
];

const statusMap = {
  inprogress: "In Progress",
  pending: "Pending",
  completed: "Completed",   
};

export { statusOptions, statusMap };
