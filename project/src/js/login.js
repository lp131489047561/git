$(() => {
    let username = $('#username');
    let password = $('#password');
    let hint = $('.hint');
    
    $('#btn').click(e => {
        let _username = username.val();
        let _password = password.val();
        
        $.ajax({
            type:'POST',
            url:'../api/login.php',
            data:'username='+_username+'&password='+_password+'&login=登录',
            success:function(text){
                hint.text(text)
                if(text === '登录成功'){
                    location.href = '../index.html';
                }
            }
        })
        e.preventDefault();
    })
})