$(document).ready(function(){
  var srcs = new Array();
  $('#contianer img').each(function(){
      srcs.push($(this).attr('src'));
  })

  function changeImage(){
      var display = $('#display-image');
      var displaySrc = display.attr('src');
      var index = $.inArray(displaySrc, srcs);

      if(index == srcs.length - 1){
          index = -1;
      }

      display.attr('src',srcs[index+1]);
  
  }

  temp = setInterval(changeImage, 2000);
})