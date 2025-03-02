let math=+prompt("Nhập điểm toán:");
let literature=+prompt("Nhập điểm Văn:");
let english=+prompt("Nhập điểm anh:");
let medium=(math+literature+english)/3;
if (medium>=8.0) {
    alert("Giỏi");
} else if (medium>6.9) {
    alert("Khá");
} else if (medium>5.0) {
    alert("Trung bình")
}else{
    alert("Yếu");
}