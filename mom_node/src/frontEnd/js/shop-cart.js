$(() => {
    let tbody = document.querySelector('tbody');

    //根据数据生成购物车商品
    $.ajax({
        type:'GET',
        url:'http://localhost:1314/cart?type=cart',
        success:function(data){
            show(data);

            //点击删除商品
            $('tbody').click(e => {
               if($(e.target).is(".del")){
                    let id = $(e.target).parent().parent().attr('data-guid');

                    //发送id给后端,删除对应的数据
                    $.ajax({
                        type:'GET',
                        url:'http://localhost:1314/cart?'+`type=cartDel&cartId=${id}`,
                        success:function(msg){
                            if(msg=='删除成功'){
                                 //删除后重新生成页面
                                $.ajax({
                                    type:'GET',
                                    url:'http://localhost:1314/cart?type=cartAnew',
                                    success:function(data){
                                        console.log(data);
                                        show(data);
                                    }
                                })
                            }
                           
                        }
                    })
                }
            })
        }

    });


    //封装函数生成结构
    function show(data){
            let dataList = data;
            let totalSum = 0;
            
            tbody.innerHTML = dataList.map((itme) => {
                //获取总金额
                totalSum += (itme.total*1);
                $('.shop-total').text(totalSum);

                return  `<tr data-guid="${itme.id}">
                            <td><input type="checkbox"/></td>
                            <td class="td2"><img src="${itme.imgurl}" /></td>
                            <td class="td3"><a href="../html/shop-details.html">${itme.name} ${itme.recommend}</a></td>
                            <td class="td4">型号: 蜗牛</td>
                            <td class="td5">${itme.price}</td>
                            <td class="td6">${itme.num}</td>
                            <td class="td7">${itme.total}</td>
                            <td class="td8">
                                <span class="del">删除</span>
                                <span>收藏</span>
                            </td>
                        </tr>` 
            }).join('');
        } 
    })