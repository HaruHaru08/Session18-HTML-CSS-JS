let number=+prompt("Nhập mã HTTP:");
switch (number) {
    case 200:
        alert("Thành công");
        break;
    case 201:
        alert("Thêm thành công");
        break;
    case 400:
        alert("Lỗi request");
        break;
    case 404:
        alert("Không tìm thấy");
        break;
    case 500:
        alert("Lỗi server");
        break;
    default:
        alert("Giá trị không hợp lệ");
        break;
}