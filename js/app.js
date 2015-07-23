$(document).ready(function(){
  var stickyNavTop = $('.search-engine').offset().top;
  console.log("OFFSET NAV " + stickyNavTop);
  $('#btn-toggle-menu, #overlay').click(function(){
    $('body').toggleClass('with-sidebar');
  });

  $('.field-input').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  });

  // à la perte du focus
  $('.field-input').blur(function(){
    $parent = $(this).parent();
    if($(this).val() == ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  });

  // si un champs est rempli on rajoute directement la class has-label
  $('.field-input').each(function(){
    if($(this).val() != ''){
      $(this).parent().addClass('has-label');
    }
  });

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    console.log("OFFSET SCROLL " + scrollTop);
    if (scrollTop > stickyNavTop) {
        $('.search-engine').addClass('sticky');
    } else {
        $('.search-engine').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
      stickyNav();
  });


});
