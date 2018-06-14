define(['jquery'], function($) {
    return $.fn.extend({
        footer:function(obj){
          return this.each(function(){
              $.ajax({
                 type: "get",
                 url:'http://localhost:1314/extends/footer/footer.html',
                 success: function(html){
                      $(this).html(html);
                 }.bind(this)
              });
          });
      }
    })
})