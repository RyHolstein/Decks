
$(document).ready(function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    $("#center").css({
      "width": "300px",
      "margin-left": "-150px"
    });

    $(".main-title").css({
      "font-size": "36px"
    });

  }

});
