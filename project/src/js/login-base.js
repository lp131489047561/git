require.config({
    // baseUrl: "js",
    paths: {
        'jquery': '../lib/jquery-3.3.1',
        'login':'login',
        //帮助你引入css和html
        'text':'text',
    }
})
require(['jquery'], function($){
    require(['jquery','text','login'], function($,text){
    })
})