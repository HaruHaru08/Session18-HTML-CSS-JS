let firstNumber=+prompt("Mời bạn nhập vào số a");
let secondNumber=+prompt("Mời bạn nhập vào số b");
let operation=prompt("Mời bạn nhập vào phép tính(+,-,*,/,%)");
let addition=firstNumber + secondNumber;
let subtraction=firstNumber - secondNumber;
let multiplication=firstNumber * secondNumber;
let division=firstNumber / secondNumber;
let division_to_get_remainder=firstNumber % secondNumber;
switch (operation) {
    case "+":
        alert(`Kết quả của phép tính trên: ${firstNumber} + ${secondNumber}=${addition}`);
        break;
    case "-":
        alert(`Kết quả của phép tính trên: ${firstNumber} - ${secondNumber}=${subtraction}`);
        break;   
    case "*":
        alert(`Kết quả của phép tính trên: ${firstNumber} * ${secondNumber}=${multiplication}`);
        break;
    case "/":
        alert(`Kết quả của phép tính trên: ${firstNumber} / ${secondNumber}=${division}`);
        break;
    case "%":
        alert(`Kết quả của phép tính trên: ${firstNumber} % ${secondNumber}=${division_to_get_remainder}`);
        break;
    default:
        alert("Không có phép tính này trong thư viện của tui");
        break;
}