let year=+prompt("Mời bạn nhập vào năm muốn kiểm tra:");
if ((year % 4 === 0 && year % 100 != 0) || (year %400 ===0)) {
    alert("Năm này là năm nhuận");
} else {
    alert("Năm này không phải năm nhuận");
}