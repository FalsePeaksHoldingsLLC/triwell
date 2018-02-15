(function($){
    $(function(){
      $('.button-collapse').sideNav();
      $('html').click(function(){
        $('input#input_text, textarea#textarea1').characterCounter();
      })
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  function hide(){
    document.getElementById("layover").style.display = "none";
    document.getElementById("layover-html").classList.remove("prevent-scroll");
  }