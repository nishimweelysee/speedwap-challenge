
$(document).ready(function(){
    $(".widget").click(function() {
      let posttion = $(this).data('position');
      $("#result").text(posttion)
    });
  }); 