const formatCustomDate = (date) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const [weekday, month, day, year] = formattedDate.replace(",", "").split(" ");
  return `${weekday} ${day} ${month} ${year}`;
};

export { formatCustomDate };
