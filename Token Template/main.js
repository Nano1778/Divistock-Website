function myFunction(x) {
    x.classList.toggle("change");
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
var fixed = document.getElementById('myNav');

fixed.addEventListener('touchmove', function(e) {
        e.preventDefault();
});

$('.nav-bar').localScroll();
$('.overlay-content').localScroll();
$('.content').localScroll();
$('.contain').localScroll();

var sections = $('section')
  , nav = $('#nav')
  , nav_height = nav.innerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).innerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});


var msections = $('section')
    , mnav = $('#myNav')
    , mnav_height = mnav.outerHeight();

$(window).on('scroll', function() {
    var cur_mpos = $(this).scrollTop();

    msections.each(function() {
        var mtop = $(this).offset().top - mnav_height,
            mbottom = mtop + $(this).outerHeight();

        if (cur_mpos >= mtop && cur_mpos <=mbottom) {
            mnav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            mnav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
});
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('#mnav').addClass('shrink');
    }
    else {
        $('#mnav').removeClass('shrink');
    }
});
