$(document).ready(function () {
  var $window = $(window)
  var $animatedItem = $('.has-animation')
  $animatedItem.css({
    visibility: 'hidden',
  })

  // Check if in view.
  function runAnimation() {
    var windowTop = $window.scrollTop()
    var windowHeight = $window.height()
    var windowWidth = $window.width()
    var windowBottom = windowTop + windowHeight + windowWidth

    $animatedItem.each(function (animated_index) {
      var $element = $(this)
      var elementTop = $element.offset().top
      var elementHeight = $element.outerHeight()
      var elementWidth = $element.outerWidth()
      var elementBottom = elementTop + elementHeight + elementWidth

      // Refresh the collection
      $animatedItem = $('.has-animation')

      if (windowTop > elementTop - windowHeight / 1.2) {
        // Check to see if this current container is within viewport.
        if (elementBottom >= windowTop && elementTop <= windowBottom) {
          $element.each(function (i, el) {
            // Stagger the elements into view.
            if ($(el).hasClass('has-animation')) {
              $(el).eq(i).removeClass('has-animation')

              setTimeout(function () {
                $(el).css({
                  visibility: 'visible',
                })
                $(el).addClass('animated in-view')
              }, 200 * (animated_index + 1))
            }
          })
        }
      }
    })
  }
  $window.on('scroll resize', runAnimation)
  $window.trigger('scroll')
})
