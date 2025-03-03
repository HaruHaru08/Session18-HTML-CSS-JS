let number = prompt("Nhập một số bất kỳ (0-999):");

if (isNaN(number) || number.trim() === "" || number < 0 || number > 999) {
    alert("Số nhập không hợp lệ. Vui lòng nhập số từ 0 đến 999.");
} else {
    number = Math.floor(Number(number));

    try {
        console.log(new Intl.NumberFormat('en-US', { style: 'spellout' }).format(123));
        text = text.charAt(0).toUpperCase() + text.slice(1);
        alert(text);
    } catch (error) {
        alert("Trình duyệt không hỗ trợ chuyển số thành chữ. Vui lòng thử trên Chrome hoặc Edge.");
    }
}
