export const timeFormatter = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
};
