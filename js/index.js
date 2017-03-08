  $(function(){
    var $earphone = $('#earphone-img');
    var $note = $('#note-img');
    var $dumbbell = $('#dumbbell-img');
    var $phone = $('#phone-img');
    var $boxE = $('#box-earphone');
    var $boxN = $('#box-note');
    var $boxD = $('#box-dumbbell');
    var $boxP = $('#box-phone');
  
      $('#bag-img').on("click", function() {
      $boxE.toggleClass('anime');
      $boxN.toggleClass('anime');
      $boxD.toggleClass('anime');
      $boxP.toggleClass('anime');
      $boxE.toggleClass('anime2');
      $boxN.toggleClass('anime2');
      $boxD.toggleClass('anime2');
      $boxP.toggleClass('anime2');
      $("#box-earphone").toggleClass('anime');
      if($('#box-earphone').hasClass("anime")) {
      $boxE.animate({
         transform : "rotate("+ 180 + "deg)"
      });
      }

      if($('#earphone-img').hasClass('anime')){
        $boxE.css({
           transform : "rotate("+ 0 + "deg)"
        });
        $boxN.css({
           transform : "rotate("+ 180 + "deg)"
        });
        $boxD.css({
           transform : "rotate("+ 180 + "deg)"
        });
        $boxP.css({
           transform : "rotate("+ 180 + "deg)"
        });
        }else{
        $boxE.css({
           transform : "rotate("+ 180 + "deg)"
        });
        $boxN.css({
           transform : "rotate("+ 0 + "deg)"
        });
        $boxD.css({
           transform : "rotate("+ 0 + "deg)"
        });
        $boxP.css({
           transform : "rotate("+ 0 + "deg)"
        });
      }

    // マウスポインターが画像に乗った時の動作
    $('#bag-img').on("mouseover",function() {
      $(this).attr('src', './image/bag-open.png');
    });
     
     // マウスポインターが画像から外れた時の動作
    $('#bag-img').on("mouseout",function() {
       $(this).attr('src', './image/bag-closed.png');
    });
      
     });
          
    //ここからユーチューブの部分     
    $(function(){
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
    });
  });