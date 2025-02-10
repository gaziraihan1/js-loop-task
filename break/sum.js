let sum = 0;
let i = 1;
while(true){
    sum = sum + i;
    if(sum >= 100) {
        break
    }
    i++;
}
console.log('Total sum of the number',sum);
console.log('Last number', i)