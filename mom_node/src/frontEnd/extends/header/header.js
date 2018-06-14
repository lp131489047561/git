define(['jquery'], function($) {
    return $.fn.extend({
        header:function(obj){
          return this.each(function(){
              $.ajax({
                 type: "get",
                 url:'http://localhost:1314/extends/header/header.html',
                 success: function(html){
                      $(this).html(html);
                 }.bind(this)
              });
          });
      }
    })
})