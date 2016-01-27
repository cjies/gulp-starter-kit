
$(document).ready(function() {

  $(document).on('click', 'h1', function(event) {
    event.stopPropagation();
    var self = $(this);
    var otherContainer = $(document);
    self.addClass('is-active');
    // otherContainer.toggleClass('is-active');

    function removeActive(e) {
      if (self.parent().has(e.target).length === 0) {
        console.log('obj');
        self.removeClass('is-active');
      }
      $(document).off('click', removeActive);
    }

    $(document).on('click', removeActive);

    
    // clickOtherClose(event, function() {
    //   console.log('obj');
    //   self.removeClass('is-active');
    //   // otherContainer.removeClass('is-active');
    // }, self.parent());

  });


});

  function clickOtherClose(event, closeCallback, outsideBox) {
    var targetBox = outsideBox || self.parent();
    function removeActive(e) {
      if(targetBox) {
        if (targetBox.has(e.target).length === 0) {
          if($.isFunction(closeCallback)) {
            closeCallback();
          }
        }
      }
      $(document).off('click', removeActive);
    }
    $(document).off('click', removeActive);
    $(document).on('click', removeActive);
  }





/* Sample */
console.log('Hello World!');