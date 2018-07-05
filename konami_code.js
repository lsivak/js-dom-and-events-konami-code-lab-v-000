const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init(code) {
  const key = parseInt(code.detail || code.which);

 if (key === number[index]) {
   index++;

   if (index === number.length) {
     alert("Hurray!");

     index = 0;
   }
 } else {
   index = 0;
 }
}
