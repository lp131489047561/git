//数字字母组合的四位验证
function randomNum(){
    var arr = 'abcdefjhwjklmnopqlstuvwxyz0123456789';

    var num = '';

    for(var i=1;i<5;i++){

        var idx = parseInt(Math.random()*arr.length);

        num += arr[idx];
    }
    return num;
}