const reverse = (str) => {
  if (str == "") return "no";
  return str.split("").reverse().join("");
};
export default reverse;
