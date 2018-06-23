$(document).ready(function(){
    $('.circle').hover(function(){
        $(this).css("visibility", "hidden");
    });
    
    $('.circle').click(function(){
        $(this).css("visibility", "hidden");
    });
    
    var audio = $('#pop')[0];
       audio.volume = 0.4;
    
    $(".circle") // loop each circle
  .each(function(i) {
    if (i != 0) { // only clone if more than one needed
      $('#pop')
        .clone()
        .attr("id", "pop-" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("beeper", i); // save reference 
  })
  $(".circle").mouseenter(function() {
    $("#pop-" + $(this).data("beeper"))[0].play();
  });
$("#pop").attr("id", "pop-0"); // get first one into naming convention
});