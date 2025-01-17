   function reg() {
  var username = document.forms["zhuce"]["username"].value;
  var password = document.forms["zhuce"]["password"].value;
  var password2 = document.forms["zhuce"]["password2"].value;
  var sex = document.querySelector('input[name="sex"]:checked');
  var rq = document.forms["zhuce"]["rq"].value;
  var xq = document.querySelectorAll('input[name="xq"]:checked');
  var email = document.forms["zhuce"]["email"].value;
  var grjs = document.forms["zhuce"]["grjs"].value;

  if (username == "") {
    alert("请输入用户名");
    return false;
  }

  if (password == "") {
    alert("请输入密码");
    return false;
  }

  if (password2 == "") {
    alert("请确认密码");
    return false;
  }

  if (password != password2) {
    alert("两次输入的密码不一致");
    return false;
  }

  if (sex == null) {
    alert("请选择性别");
    return false;
  }

  if (rq == "") {
    alert("请选择出生日期");
    return false;
  }

  if (xq.length === 0) {
    alert("请选择兴趣爱好");
    return false;
  }

  if (email == "") {
    alert("请输入个人邮箱");
    return false;
  }

  if (grjs == "") {
    alert("请输入个人简介");
    return false;
  }
alert('注册成功')
}