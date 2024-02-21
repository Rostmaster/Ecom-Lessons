// part 1
let array = Array.from({length:100}, () => 55)
// part 2
let arrayLength = prompt('Enter a array length: ')
// part 3
let array2 = []
for(let i = 0;i<arrayLength;i++){
    array2[i] = prompt('Enter an array value: ')
}

let moreThanAvg = 0
let lessThanAvg = 0

for(let i = 0;i<array2.length;i++){
    if(array2[i] > 50){
        moreThanAvg++
    }else if(array2[i] < 50){
        lessThanAvg++
    }
}

for(let i = 0;i<array2.length;i++){
    array2[i]>= 90? document.write(array2[i]+' excellent'+'<br>') :
    array2[i]>= 70? document.write(array2[i]+' good'+'<br>') :
    array2[i]>= 50? document.write(array2[i]+' average'+'<br>') :
    document.write(array2[i]+' weak'+'<br>')
}