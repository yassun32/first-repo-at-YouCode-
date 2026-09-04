let str = "enissay";
let i = 0;
while (str[i]) {
    i++;
}
console.log(i);
let mote= "";
while (i >= 0) {
    if(str[i] !== undefined){
      mote += str[i];
    }
   
    i--;
}
console.log(mote);