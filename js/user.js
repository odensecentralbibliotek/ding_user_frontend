/**
 * 
 * Logout and refreshes page.
 * 
 */

(function($){
  Drupal.ninja_logout = function() {
    $.get("/user/ninja_logout/", function(data) {
      location.href = location.href;
    });
  };
})(jQuery);