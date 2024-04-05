

new WOW().init();
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  document.addEventListener("contextmenu", function(e)
  {
    e.preventDefault();


  });

  document.onkeydown = function(e){
    if(
      e.ctrlKey && 
      (e.keyCode===67 || //Ctrl C)
      e.keyCode===85 || //ctrl+U
      e.keyCode===83 || //ctrl+S
      e.keyCode===73 || //Ctrl+i
      e.keyCode===74  )//Ctrl+J
    
      ){
        return false;
      }
      else{
        return true;

      }
  };