<?php
    /*require('link.php');
    $username = isset($_POST['username'])? $_POST['username'] : null;
    $password = isset($_POST['password'])? $_POST['password'] : null;

    //连接数据库表格
    $sql = "SELECT * FROM `login` WHERE username = '$username'";

    //获取查询结果集
    $result = $conn->query($sql);

    //转成数组
    $i = 0;
    $row = $result->fetch_all(MYSQLI_ASSOC);

    if(isset($_POST['regist'])){
        if($row){
            echo '注册已存在';
        }else{
            $sql = "INSERT INTO `login`(`username`, `password`) VALUES ('$username','$password')";
            $conn->query($sql);
            echo '注册成功';
        }
    }else if(isset($_POST['login'])){
        if($row[0]['password'] === $password){
            echo '登录成功';
        }else{
            echo '登录失败';
        }
    }

    $result->close();

    $conn->close();*/
?>