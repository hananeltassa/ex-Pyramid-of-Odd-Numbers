const x = parseInt(prompt("Enter x: "),10)

let oddNumbers = [];

let number = 1;

while (oddNumbers.length < x){
    if (number % 2 !== 0){
        oddNumbers.push(number);
    }
    number++;
}

for (let i = 0; i< x; i++){
    let rows= oddNumbers.slice(0,i+1).map(String)
    console.log(rows.join(" "));
}