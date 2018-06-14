$(() => {
    //截取商品列表传过来的id参数
    let params = location.search;//?id=3
    let id = params.slice(4);
    
    $.ajax({
        type:'GET',
        url:'../api/home.php?type=details&id='+id,
        success:function(data){
            let dataList = JSON.parse(data);

            //写入数据
            dataList.map((itme) => {
                $('.img-box').append(`<img src="${itme.imgurl}" class="img"/>`);
                $('.default').append(`<img src="${itme.imgurl}"/>`);
                $('.discount').text(itme.discount);
                $('.name').text(itme.name);
                $('.recommend').text(itme.recommend);
                $('.price').text(itme.price);
                $('.cost').text(itme.cost);
                $('.save').text(itme.cost-itme.price);

                //鼠标移入img上时显示对应图片
                $('.img-list').mouseover('img',e => {
                    let src = $(e.target).attr('src');
                    $('.img').attr('src',src);
                });

                //鼠标移入时放大镜显示对应图片
                $('.img').mouseover(function(e){
                    let src = $('.img').attr('src');
                    $('.lens').attr('src',src);

                    //获取图片的left,top值
                    let left = $(this).position().left + $(this).width() + 10;
                    let top = $(this).position().top;

                    $(".lens-box").css({top:top+"px",left:left+"px"}).show();

                //鼠标移动改变图片的位置
                }).mousemove(function(e){
                            //计算鼠标在图片上面的偏移坐标
                            let x = e.pageX - $(this).position().left;
                            let y = e.pageY - $(this).position().top;

                            //定位放大镜的距离
                            $(".lens-box").scrollTop(y*1.5 -240).scrollLeft(x*1.5 -240);

                //鼠标移出是隐藏放大镜
                }).mouseout(function(){
                    $(".lens-box").hide();
                });


                //购物车动画效果
                let index = 1;
                let addShop = $('.add-shop');
                let shopnum = 0;

                addShop.click(e => {
                    index ++;
                    addShop.append(`<img src="" class="circle"/>`);

                    //获取元素
                    let circle = $('.circle');
                    let addEnd = $('.add-end');

                    circle.attr('src',$('.img').attr('src'));
                    //获取鼠标距浏览器文档的偏移量
                    let left = e.pageX - circle.width()/2;
                    let top = e.pageY - circle.width()/2;
                    circle.css({'left':left,'top':top});

                    //获取终点距浏览器文档的偏移量
                    let endLeft = addEnd.offset().left + 'px';
                    let endTop = addEnd.offset().top + 'px';

                    //不断改变元素宽高及left,top值
                    circle.animate({
                        left: endLeft,
                        top: endTop, 
                        width:'10px',
                        height:'10px'
                    },1000,function(){
                        circle.remove();
                    });

                    //获取元素属性写入数据库
                    let id = itme.id;
                    let imgurl = $('.img').attr('src');
                    let name = $('.name').text();
                    let recommend = $('.recommend').text();
                    shopnum += $('.num').val()*1;
                    let price = $('.price').text();
                    let total = price*shopnum;

                    //传送数据给后端
                    $.ajax({
                        type:'GET',
                        url:`../api/home.php?type=cart&shopId=${id}&imgurl=${imgurl}&name=${name}&recommend=${recommend}&num=${shopnum}&price=${price}&total=${total}`,
                        success:function(data){
                            console.log(data)
                        }
                    })
                    e.preventDefault();
                })


                //获取元素
                let shopNum = $('.num');

                let idx = 1;
                //点击数量增加
                $('.plus').click(() => {
                    let plus = idx++ + 1;
                    shopNum.val(plus);
                })

                //点击数量减少
                $('.minus').click(() => {
                    let minus = idx-- - 1;
                    if(idx <= 1){
                        minus = 1;
                        idx = 1;
                    }
                    shopNum.val(minus);
                })
            })
        }
    })
})