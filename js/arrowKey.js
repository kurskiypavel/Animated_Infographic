var Key = {
    LEFT:   37,
    RIGHT:  39
  };
  
  /**
   * old IE: attachEvent
   * Firefox, Chrome, or modern browsers: addEventListener
   */
  function _addEventListener(evt, element, fn) {
    if (window.addEventListener) {
      element.addEventListener(evt, fn, false);
    }
    else {
      element.attachEvent('on'+evt, fn);
    }
  }
  
  function handleKeyboardEvent(evt) {
    if (!evt) {evt = window.event;} // for old IE compatible
    var keycode = evt.keyCode || evt.which; // also for cross-browser compatible
  
    var info = document.getElementById("info");
    switch (keycode) {
      case Key.LEFT:
      showPrevScreen();
        break;
      case Key.RIGHT:
      showNextScreen();  
        break;
    }
  }
  
  _addEventListener('keydown', document, handleKeyboardEvent);
  