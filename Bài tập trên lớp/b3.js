let employee_Status = prompt("Nhập trạng thái nhân viên:");
let tã =employee_Status === "WORKING" ? "Đang làm việc" :
        employee_Status === "ON_LEAVE" ? "Đang nghỉ phép" :
        employee_Status === "RESIGNED" ? "Đã nghỉ việc" :
        employee_Status === "TERMINATED" ? "Bị sa thải" :
        "Giá trị nhập vào không hợp lệ";
alert(message);