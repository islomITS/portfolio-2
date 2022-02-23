$(function () {
    setTimeout(() => {
        $(".window").css({
            opacity: '0',
            transition: '1.4s'
        })
    }, 3000);
    setTimeout(() => {
        $(".window").css({
            display: 'none',
        })
    }, 4100);
    $(".fa-bars").click(function () {
        $(".header-nav-p").toggleClass('active');
        $(".fa-bars").toggleClass('fa-times');
    })
    $(".header-nav-p ul li a").click(function () {
        $(".header-nav-p").toggleClass('active');
        $(".fa-bars").toggleClass('fa-times');
    })
    let link = $('.header-nav-p ul li a , .header-btn');
    link.on('click', function (e) {
        e.preventDefault();
        link.removeClass('active');
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);
        $('html, body').animate({
            scrollTop: target.offset().top - 80}, 40);
        });
        
        $(window).scroll(function () {
            let asd = $('.header-nav-p ul li a');
            if ($(this).scrollTop() > 100) {
                $('.header-nav').addClass('active');
            } else {
                $('.header-nav').removeClass('active');
            }
            let scrollHeader = $(window).scrollTop();
            asd.each(function() {
                let selector = $(this).attr('href');
                let target = $(selector);
                if(scrollHeader >= target.offset().top - 80) {
                    asd.removeClass('active');
                    $(this).addClass('active');
                }else{
                    asd.add('active');
                    $(this).removeClass('active');
                }
            })
        })
  
})
