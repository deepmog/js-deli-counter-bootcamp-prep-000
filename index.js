var n = 1;

function takeANumber(katzDeliLine) {
katzDeliLine.push(n);
n++;
return `Welcome! You are number ${n-1}.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > null) {
  return `Currently serving ${katzDeliLine.shift()}.`;
} else {
 return "There is nobody waiting to be served!";
}}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > null) {return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`}
  else {return "The line is currently empty."}
}