const Type = () => {
  let input = document.getElementById("input").value;
  input = parseFloat(input);
  if (isNaN(input)) {
    alert("Invalid Input");
    return -1;
  }
  return input;
};

const GbConvert = () => {
  let input = Type();
  if (input === -1) return;
  let res = input / 1000000000;
  document.getElementById("result").innerHTML = res;
  //console.log(res);
  //console.log(input);
};
const ByteConvert = () => {
  let input = Type();
  if (input === -1) return;
  let res = input * 1000000000;
  document.getElementById("result").innerHTML = res;
  //console.log(res);
  //console.log(input);
};
