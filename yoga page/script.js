$(document).ready(function() {
    $(".navbar__logo").css('transform' , 'rotate(720deg')

    $(window).scroll(function() {
      
        if ($(this).scrollTop() > 0) {
          $(".s__1-item-2-text-2").slideDown(1500);
           
        }
        
      });
      var arrow = $('#right');
      var firstimg = $('#pic1');
      var secondimg = $('#pic2');
      var thirdimg = $('#pic3');
      $(arrow).click(function(){
        if (firstimg.hasClass("active")) {
          firstimg.removeClass("active").addClass("notactive");
          secondimg.removeClass("notactive").addClass("active");
        }
        else if (secondimg.hasClass("active")) {
          secondimg.removeClass("active").addClass("notactive");
          thirdimg.removeClass("notactive").addClass("active");
    
        }
        
      })
     
      
})