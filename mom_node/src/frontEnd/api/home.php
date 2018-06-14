<?php
    /*require('link.php');
    //首页id
    $id = isset($_GET['id'])? $_GET['id'] : null;

    //商品列表页参数
    $page = isset($_GET['page'])? $_GET['page'] : 1;
    $qty = isset($_GET['qty'])? $_GET['qty'] : 8;

    //商品详情参数
    $shopId = isset($_GET['shopId'])? $_GET['shopId'] : null;
    $imgurl = isset($_GET['imgurl'])? $_GET['imgurl'] : null;
    $name = isset($_GET['name'])? $_GET['name'] : null;
    $recommend = isset($_GET['recommend'])? $_GET['recommend'] : null;
    $num = isset($_GET['num'])? $_GET['num'] : null;
    $price = isset($_GET['price'])? $_GET['price'] : null;
    $total = isset($_GET['total'])? $_GET['total'] : null;

    //购物车id
    $cartId = isset($_GET['cartId'])? $_GET['cartId'] : null;
    echo $cartId;

    //判断是商品列表页，返回数据
    if($_GET['type'] === 'goodslist'){
        $sql = "SELECT * FROM `home-list` WHERE siyou = '7'";

        $result = $conn->query($sql);

        //转成数组
        $row = $result->fetch_all(MYSQLI_ASSOC);

        //根据分页截取数据
        $data = array_slice($row,($page-1)*$qty,$qty);
        $res = array(
            'total' =>count($row),
            'page' => $page*1,
            'qty' => $qty*1,
            'data' => $data
        );
        echo json_encode($res,JSON_UNESCAPED_UNICODE);

        $result->close();

        $conn->close();

    //判断是首页，返回数据
    }else if($_GET['type'] === 'home'){
        //连接数据库表格
        $sql = "SELECT * FROM `home-list` WHERE 1";

        //获取查询结果集
        $result = $conn->query($sql);

        $row = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);

        $result->close();

        $conn->close();
    }

    //查找对应id数据,返回数据给商品详情页
    if($_GET['type'] === 'details'){
        $sql = "SELECT * FROM `home-list` WHERE id = '$id'";

        $result = $conn->query($sql);

        $row = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);  
    }

    //添加购物车的数据
    if($_GET['type'] === 'cart'){
        $sql = "SELECT * FROM `shop-cart` WHERE id = '$shopId'";
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);

        //id存在就修改,否则增加
        if($row){
            $sql = "UPDATE `shop-cart` SET `num` = $num WHERE 1";
            $sql = "UPDATE `shop-cart` SET `num` = $total WHERE 1";
            $conn->query($sql);
        }else{
            $sql = "INSERT INTO `shop-cart`(`id`, `imgurl`, `name`, `recommend`, `num`, `price`,`total`) VALUES ($shopId,'$imgurl','$name','$recommend',$num,$price,$total)";
            $conn->query($sql);
        }
    }

    //购物车读取数据
    if($_GET['type'] === 'shopCart1'){
         $sql = "SELECT * FROM `shop-cart` WHERE 1";

        //获取查询结果集
        $result = $conn->query($sql);

        $row = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);

        $result->close();

        $conn->close();
    }

    //购物车删除数据
    if($_GET['type'] === 'shopCart2'){
        $sql = "DELETE FROM `shop-cart` WHERE id = $cartId";
        $result = $conn->query($sql);
    }

    //删除后从新请求数据
    if($_GET['type'] === 'shopCart3'){
        $sql = "SELECT * FROM `shop-cart` WHERE 1";

        $result = $conn->query($sql);

        $row = $result->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);

        $result->close();

        $conn->close();
    }*/
?>