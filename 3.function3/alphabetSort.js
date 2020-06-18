function alphabetSort(message){
  return message.split("").sort().join("");
}
alert(alphabetSort('hello')); // should return 'ehllo'