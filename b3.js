let login_name =prompt("Mời bạn nhập tên đăng nhập");
if (login_name==="ADMIN") {
    let password=prompt("Mời bạn nhập mật khẩu");
    if (password==="TheMaster") {
        alert("Welcome");
    }else if (password===null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
}else if (login_name==="null") {
    alert("Cancelled");
} else {
    alert("I Don't know you");
}