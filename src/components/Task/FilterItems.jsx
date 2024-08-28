import React from "react";
import useTaskStore from "../../store/task";
import Search from "../../assets/icons/Search.svg";
import "./style.css";

function FilterItems() {
  const { setSearchTerm, searchTerm } = useTaskStore();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div class="search-input-wrapper">
      <img src={Search} alt="search" />
      <input
        type="text"
        placeholder="Search To-Do"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterItems;
