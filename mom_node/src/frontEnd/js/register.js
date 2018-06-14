
$(() => {
    //使用commonjs,生成随机验证码
    let random = $('.random-num');
    random.text(randomNum());

    let username = $('#username');
    let password = $('#password');
    let authCode = $('#auth-code');
console.log(authCode)
    let hint = $('.hint'); 
    let btn = $('#btn');

    //点击时获取用户名密码
    btn.click(e => {
        let _username = username.val();
        let _password = password.val();
        let _randomNum = random.text();
        let _authCode = authCode.val();
    
        //判断用户名、密码、验证码正确后写入数据库
        if(/^1[3-8]\d{9}$/.test(_username) || /[\w\-]{3,}@[a-z0-9\-]{2,63}(\.[a-z]{2,6})+$/i.test(_username)){
            if(/^[^\s]{6,20}$/.test(_password)){
                if(_authCode === _randomNum){
                    $.ajax({
                        type:'POST',
                        url:'../api/login.php',
                        data:'username='+_username+'&password='+_password+'&regist=注册',
                        success:function(text){
                            hint.text(text)
                        }.bind(this)
                    })
                }else{
                    hint.text('验证码有误或不能为空')
                }
            }else{
                hint.text('密码有误或不能为空')
            }
        }else{
            hint.text('用户名有误或不能为空')
        }

        //阻止默认提交
        e.preventDefault();
    })
})