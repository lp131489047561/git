$(() => {
    //轮播图动画效果
    let banner = $('#banner');
    let img = $('#banner ul img');
    let page = $('.page');

    //创建分页符
    let str = '';
    for(let i=0;i<img.length;i++){
        str+=`<li>${i+1}</li>`;
    }
    page.append(str);
    let pages = $('.page li');

    //默认显示第一张,其他隐藏
    $.each(img,i => {
        if(i > 0){
            $(img[i]).hide();
        }else{
            $(pages[i]).addClass('active');
        }
    });


    let idx = 0;
    //创建按钮
    banner.append('<span class="btnLeft">&lt</span>','<span class="btnRight">&gt</span>');
    let btnLeft = $('.btnLeft');
    let btnRight = $('.btnRight');

    btnLeft.click(() => {
        idx--;
        autoPlay();
    })
    btnRight.click(() => {
        idx++;
        autoPlay();
    })

    let timer;
    //鼠标移入停止定时器
    banner.mouseover(() => {
        clearInterval(timer);
    });

    //鼠标移开启动定时器
    banner.mouseout(() => {
        show();
    });

    function show(){
        timer = setInterval(() => {
            idx++;
            autoPlay();
        },5000);
    }
    show();

    function autoPlay(){
        //轮播到最后一张时重置到第一张
        if(idx >= img.length){
            idx = 0;
        }else if(idx < 0){
            idx = img.length-1;
        }
       
        //显示当前图片，高亮当前页码
        $.each(img,i => {
            if(i === idx){
                $(img[i]).show();
                $(pages[i]).addClass('active');
            }else{
                $(img[i]).hide();
                $(pages[i]).removeClass('active');
            }
        });
    }

    ////点击当前页码高亮
    $.each(pages,i => {
        $(pages[i]).mousemove(() => {
            $.each(pages,j => {
                if(j === i){
                    idx = j;
                    autoPlay();
                    $(img[j]).show();
                    $(pages[j]).addClass('active');
                }else{
                    $(img[j]).hide();
                    $(pages[j]).removeClass('active');
                } 
            }) 
        })
    })



    //倒计时活动
    function showTime(){
        let time = document.querySelector('.time p');
        let span = document.createElement('span');
        time.appendChild(span);
        let end = '2018-6-10 11:46:00';

        //启动定时器
        let timer = setInterval(() => {
            let offset = Math.floor((Date.parse(end)-Date.now())/1000);
            if(offset<=0){
                clearInterval(timer);
                span.style.display = 'none';
            }

            //计算差值：秒分时天
            let sec = offset%60;
            let min = Math.floor(offset/60%60);
            let hour = Math.floor(offset/60/60%60);
            let day = Math.floor(offset/60/60/24);

            //补零操作
            set = sec<10 ? '0'+sec : sec;
            min = min<10 ? '0'+min : min;
            hour = hour<10 ? '0'+hour: hour;

            span.innerHTML = `距离本场结束: ${day} 天 ${hour} 时 ${min} 分 ${sec} 秒`;
        }) 
    }
    showTime();




    (function(){
        //main抢购部分
        $('.shop').append('<ul class="shop-list"><ul>');
        let shopList = document.querySelector('.shop-list');
        let shopMom = document.querySelector('.main-mom .right');
        let shopMilk = document.querySelector('.main-milk .right');
        let shopDiaper = document.querySelector('.main-diaper .right');
        let shopToy = document.querySelector('.main-toy .right');
        let shopCate = document.querySelector('.main-cate .right');


        $.ajax({
            type:"get",
            url: "http://localhost:1314/home?type=home",
            success: function(data){
                let dataList = data;

                let dataBuy = dataList.slice(0,5);
                let dataMom = dataList.slice(5,11);
                let dataMilk = dataList.slice(11,17);
                let dataDiaper = dataList.slice(17,23);
                let dataToy = dataList.slice(23,29);
                let dataCate = dataList.slice(29,35);
                
                //整点抢购
                shopList.innerHTML = dataBuy.map((itme) => {
                    return `<li data-guid="${itme.id}">
                                <a href="../html/goodslist.html"><img src="${itme.imgurl}"/></a>
                                <h3><a href="#">${itme.name}</a></h3>
                                <span class="price">${itme.price}</span><br/>
                                <del><span class="cost">${itme.cost}</span></del>
                            </li>`
                }).join('');

                //妈妈专区
                shopMom.innerHTML = dataMom.map((itme) => {
                     return `<li data-guid="${itme.id}">
                                <a href="../html/goodslist.html">
                                    <h3>${itme.name}</h3>
                                    <span>${itme.recommend}</span>
                                    <img src="${itme.imgurl}"/>
                                </a>
                            </li>`
                }).join('');

                 //奶粉专区
                shopMilk.innerHTML = dataMilk.map((itme) => {
                     return `<li data-guid="${itme.id}">
                                <a href="../html/goodslist.html">
                                    <h3>${itme.name}</h3>
                                    <span>${itme.recommend}</span>
                                    <img src="${itme.imgurl}"/>
                                </a>
                            </li>`
                }).join('');

                //用品尿布
                shopDiaper.innerHTML = dataDiaper.map((itme) => {
                     return `<li data-guid="${itme.id}">
                                <a href="../html/goodslist.html">
                                    <h3>${itme.name}</h3>
                                    <span>${itme.recommend}</span>
                                    <img src="${itme.imgurl}"/>
                                </a>
                            </li>`
                }).join('');

                //玩具专区
                shopToy.innerHTML = dataToy.map((itme) => {
                     return `<li data-guid="${itme.id}">
                                <a href="../html/goodslist.html">
                                    <h3>${itme.name}</h3>
                                    <span>${itme.recommend}</span>
                                    <img src="${itme.imgurl}"/>
                                </a>
                            </li>`
                }).join('');

                //美食专区
                shopCate.innerHTML = dataCate.map((itme) => {
                     return `<li data-guid="${itme.id}">
                                <a href="../html/goodslist.html">
                                    <h3>${itme.name}</h3>
                                    <span>${itme.recommend}</span>
                                    <img src="${itme.imgurl}"/>
                                </a>
                            </li>`
                }).join('');
            }
        });
    })();
})


