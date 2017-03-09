$(function(){
  // マウスポインターが画像に乗った時の動作
  $('#bag-img').on("mouseover",function() {
    $(this).attr('src', './image/bag-open.png');
  });
  // マウスポインターが画像から外れた時の動作
  $('#bag-img').on("mouseout",function() {
     $(this).attr('src', './image/bag-closed.png');
  });
        
  //ここからユーチューブの部分     
     $(".music-1").on("click",function(){
      $("#box").attr("src","https://www.youtube.com/embed/ih2xubMaZWI");
     });
     $(".music-2").on("click",function(){
      $("#box").attr('src','https://www.youtube.com/embed/n8X9_MgEdCg');
     });
     $(".music-3").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/B7xai5u_tnk");
     });
     $(".music-4").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/Ic-gZlPFTkQ");
     });
     $(".music-5").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/bM7SZ5SBzyY");
     });
     $(".music-6").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/FjNdYp2gXRY");
     });
     $(".music-7").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/AOeY-nDp7hI");
     });
     $(".music-8").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/xshEZzpS4CQ");
     });
     $(".music-9").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/5IOVkstxkdE");
     });
     $(".music-10").on("click",function(){
      $(".box").attr("src","https://www.youtube.com/embed/1-0-4HqyvXE");
     });

  //野口が書いた部分
  var $boxes = $("#box-earphone");
  $("#bag-img").on("click", function() {
    $boxes.toggleClass('anime');
    $boxes.toggleClass('anime2');
    if($boxes.hasClass('anime')) {
      $boxes.css({
        transform : "rotate("+ 180 + "deg)"
      });
    }else{
      $boxes.css({
        transform : "rotate("+ 0 + "deg)"
      });
    }
  });
});