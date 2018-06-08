<?php
    //登录验证
    $servername = "localhost";
    $username = "liupan";
    $password = "lp131489047561.";
    $dbname = 'mom-infan';

    //创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
?>