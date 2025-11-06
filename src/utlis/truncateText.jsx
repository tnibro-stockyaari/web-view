export const truncateText = (text, maxLength = 100) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
