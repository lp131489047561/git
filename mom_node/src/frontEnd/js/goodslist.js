$(() => {
    let goodslist = document.querySelector('.goodslist');
    let qty = 8;
    

    //数据生成页面
    $.ajax({
        type:'GET',
        url:'http://localhost:1314/goodsList?type=goodsList&qty='+qty,
        success:function(data){
            pageData(data);

            //利用事件委托,点击时获取对应页码值
            $('.page').click('a',e => {
                if(e.target.tagName.toLowerCase() === 'a'){
                    let page = $(e.target).text();
                    //将页码值发送到后端
                    $.ajax({
                        type:'GET',
                        url:'http://localhost:1314/goodsList?type=goodsList&page='+page+'&qty='+qty,
                        success:function(data){
                           pageData(data);
                        }
                    })
                }
            })
        }
    })

    //根据数据生成商品列表
    function pageData(data){
        let datalist = data;
        //根据数据生成商品列表
        goodslist.innerHTML = datalist.data.map((itme) => {
            return `<li data-guid="${itme.id}">
                        <a href="#" class="img-box">
                            <img src="${itme.imgurl}" alt="" />
                        </a>
                        <a href="#" class="goods-head">
                            <span>${itme.discount}</span>
                            <h3>${itme.name}</h3>${itme.recommend}
                        </a>
                        <p>
                            <span class="price">${itme.price} </span>
                            <del><span class="cost">${itme.cost}</span></del>
                            <span class="fr">${itme.brand}</span>
                        </p>
                        <div class="bottom">
                            <div class="num fl">
                                <input type="text" class="fl" value="1"/>
                                <div class="fr">
                                    <span href="#">+</span>
                                    <span href="#">-</span>
                                </div>
                            </div>
                            <button href="#" class="shop-add fl">加入购物车</button>
                            <button href="#" class="collect fr">收藏</button>
                        </div>
                    </li>`
        }).join('');

        //计算总页数
        let pages = (datalist.total/datalist.qty);

        //生成页数
        let str = '';
        for(let i=0;i<pages;i++){
            str+= `<a href="#">${i+1}</a>`
        }
        $('.page div').html(str);

        //点击时获取li的id并传入详情页
        $('.goodslist').click(e =>{
            if($(e.target).is("a")){
              let id = $(e.target).parent("li").attr('data-guid');
                location.href = 'http://localhost:1314/html/shop-details.html?id='+id;
            }else if($(e.target).is("img")){
                let id = $(e.target).parent("a").parent("li").attr('data-guid');
                location.href = 'http://localhost:1314/html/shop-details.html?id='+id;
            }
        }) 
    }
})