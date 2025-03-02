let firstNumber=+prompt("Nhập cạnh thứ nhất:");
let secondNumber=+prompt("Nhập cạnh thứ hai:");
let thirdNumber=+prompt("Nhập cạnh thứ ba:");
if (firstNumber+secondNumber>thirdNumber&&secondNumber+thirdNumber>firstNumber&&firstNumber+thirdNumber>secondNumber) {
    alert("3 cạnh tạo nên 1 tam giác");
    if(firstNumber===secondNumber&&secondNumber===thirdNumber){
        alert("Tam giác đó là tam giác đều"); 
    } else if (firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber) {
        alert("Tam giác đó là tam giác cân");
    }else if (firstNumber*firstNumber + secondNumber*secondNumber===thirdNumber*thirdNumber||firstNumber*firstNumber + thirdNumber*thirdNumber=== secondNumber||secondNumber*secondNumber + thirdNumber*thirdNumber===firstNumber*firstNumber) {
        alert("Tam giác đó là tam giác vuông");
    } else {
        alert("Tam giác đó là tam giác thường");
    }
} else {
    alert("3 cạnh không tạo nên 1 tam giác");
}