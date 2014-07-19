var fissa = 0;

$(window).scroll(function () {
    if ($(window).width() >= 768) {
        if ($(window).scrollTop() > (250)) {
            if (fissa == 0) {
                fissa = 1;
                $(".navbar").addClass("navbar-fixed-top").css({
                    opacity: 0,
                    top: -30
                }).animate({
                    opacity: 1,
                    top: 0
                }, 200, function () {});
                $(".navbar").addClass("navbar-fissa");
                $(".navbar").removeClass("navbar-statica");
                $(".navbar").addClass("navbar-inverse");
                $(".navbar").removeClass("navbar-default");
            }
        }
        if ($(window).scrollTop() < (250)) {
            if (fissa == 1) {
                fissa = 0;
                $(".navbar").animate({
                    opacity: 0,
                    top: -30
                }, 200, function () {
                    $(".navbar").removeClass("navbar-fixed-top");
                    $(".navbar").removeClass("navbar-fissa");
                    $(".navbar").addClass("navbar-statica").animate({
                        opacity: 1,
                        top: 0
                    }, 300);
                });
                $(".navbar").addClass("navbar-default");
                $(".navbar").removeClass("navbar-inverse");
            }
        }
    }
    if ($(this).scrollTop() > 500 && $(this).width() > 1024 && $("#section_nav").length > 0) {
        $("#section_nav a").fadeIn();
        var a = $(this).scrollTop() + topMenuHeight;
        var b = scrollItems.map(function () {
            if ($(this).offset().top < a) {
                return this;
            }
        });
        b = b[b.length - 1];
        var c = b && b.length ? b[0].id : "";
        if (lastId !== c) {
            lastId = c;
            menuItems.parent().removeClass("active").end().filter("[href=#" + c + "]").parent().addClass("active");
        }
    } else {
        $("#section_nav a").fadeOut();
    }
});
$(window).resize(function () {
    if ($(window).width() >= 768) {
        $(".navbar-fissa .dropdown-toggle, .navbar-statica .dropdown-toggle").click(function (a) {
            a.preventDefault();
            return false;
        });
        $(".navbar").removeClass("navbar-mobile");
        $(".navbar").addClass("navbar-statica");
        $("html:lang(it-IT) .dropdown .dropdown-menu").eq(1).css("margin-left", "-140px");
        $("html:lang(en-US) .dropdown .dropdown-menu").eq(1).css("margin-left", "-160px");
    } else {
        $(".navbar").addClass("navbar-fixed-top");
        $(".navbar").addClass("navbar-mobile");
        $(".navbar").removeClass("navbar-statica");
        $(".navbar").removeClass("navbar-fissa");
        $(".navbar").addClass("navbar-inverse");
        $(".navbar").removeClass("navbar-default");
    } if ($("#section_nav").length > 0) {
        $("#section_nav").css({
            "margin-top": -($("#section_nav").height() / 2 + 8)
        });
    }
    $(window).trigger("scroll");
});
$(window).trigger("resize");
