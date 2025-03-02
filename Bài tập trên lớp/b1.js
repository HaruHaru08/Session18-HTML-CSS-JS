// Input:
// - Người dùng nhập lương

// Process:
// B1:
// Cho người dùng nhập vào lương thông qua
// câu lệnh prompt

// B2:
// Lưu lương người dùng nhập vào 1 biến (salary)
// Tạo thêm biến tax dùng để lưu thông tin về số tiền người
// dùng cần đóng thuế

// B3:
// So sánh salary của người dùng nhập
// Với từng khoảng số để đưa ra mức thuế
// phải đóng phù hợp

// B4:
// Nếu salary < 5 củ
// - Đúng --> Tiền thuế = 0 đồng
// Nếu salary >= 5 củ && salary < 10 củ
// - Đúng --> Tiền thuế = salary* 0.05
// Nếu salary >= 10 củ && salary < 18 củ
// - Đúng --> Tiền thuế = salary * 0.1
// Nếu salary >= 18 củ && salary < 32 củ
// - Đúng --> Tiền thuế == salary * 0.15
// - Sai --> Tiền thuế == salary * 0.2

// Output:
// - Xuất ra tiền đóng thuế theo mức lương
let salary=+prompt("Mời bạn nhập vào lương:");
let tax;
if(salary<5000000){
    tax=0;
}else if(salary <10000000){
    tax=salary*0.05;
}else if(salary<18000000){
    tax=salary*0.1;
}else if (salary<32000000) {
    tax=salary*0.15;
}else{
    tax=salary*0.2;
}
tax=tax.toLocaleString("vi-VN");
console.log(`Tiền thuế bạn phải đóng=${tax} đ`);