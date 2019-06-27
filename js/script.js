
$('.main-slider').slick({
	arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.clients-slider').slick({
	arrows: true,
	slidesToShow: 6,
	slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
	
});

$(document).ready(function() {
    $('.do-open').on('click', function() {
        $('#modal').css('display', 'block');
    });
    $('.do-close').on('click', function() {
        $('#modal').css('display', 'none');
    });
});



$(document).ready(function () {

  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


//E-mail Ajax Send
    $(".que-form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });