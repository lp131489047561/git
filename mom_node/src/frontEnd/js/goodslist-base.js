require.config({
   // baseUrl: "../js",
    paths: {
        'jquery': '../lib/jquery-3.3.1',
        'goodslist':'goodslist',
        //帮助你引入css和html
        'text':'text',
        //一个组件 一个模块
        'header': '../extends/header/header',
        'footer': '../extends/footer/footer',
    }
})
require(['jquery'], function($){
    require(['jquery','text','header','footer','goodslist'], function($,text,header,footer){
        $("#l_header").header();
        $("#l_footer").footer();
    })
})