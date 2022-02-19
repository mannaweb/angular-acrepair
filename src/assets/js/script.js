$(document).ready(function ($) {
! function(t) {
    "use strict";
    t(window).on("load", function() {
        t(".preloader").fadeOut(700)
    }), t("#searchOpen").on("click", function() {
        t(".search-form").addClass("open")
    }), t("#searchClose").on("click", function() {
        t(".search-form").removeClass("open")
    }), t(".hero-slider").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>",
        dots: !0,
        customPaging: function(o, s) {
            return '<a><i class="' + t(o.$slides[s]).data("icon") + '"></i><span>' + t(o.$slides[s]).data("text") + "</span></a>"
        },
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: !1
            }
        }]
    }), t(".hero-slider").slickAnimation(), t(".hero-slider-2").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !1,
        dots: !1
    }), t(".hero-slider-2").slickAnimation(), t(".work-slider").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: !1,
        autoplay: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".about-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".post-slider").slick({
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".collapse").on("shown.bs.collapse", function() {
        t(this).parent().find(".ti-plus").removeClass("ti-plus").addClass("ti-minus")
    }).on("hidden.bs.collapse", function() {
        t(this).parent().find(".ti-minus").removeClass("ti-minus").addClass("ti-plus")
    }), t(".testimonial-slider").slick({
        infinite: !1,
        dots: !1,
        arrows: !0,
        autoplay: !0,
        prevArrow: "<button type='button' class='prevArrow'><i class='ti-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='nextArrow'><i class='ti-arrow-right'></i></button>"
    }), t(".client-logo-slider").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-zoom-in",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !0
    }), t(".popup-image").magnificPopup({
        type: "image",
        removalDelay: 160,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
            }
        },
        closeOnContentClick: !0,
        midClick: !0,
        fixedContentPos: !0,
        fixedBgPos: !0
    });
    var o = document.querySelector('[data-ref~="mixitup-container"]');
    o && mixitup(o, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    }), t(".control").on("click", function() {
        t(".control").removeClass("active"), t(this).addClass("active")
    });
    var s = t("html, body");
    t("nav a, .page-scroll").on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var o = t(this.hash);
            if ((o = o.length ? o : t("[name=" + this.hash.slice(1) + "]")).length) return s.animate({
                scrollTop: o.offset().top - 90
            }, 1500, "easeInOutExpo"), !1
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutExpo: function(t, o, s, e, i) {
            return 0 === o ? s : o === i ? s + e : (o /= i / 2) < 1 ? e / 2 * Math.pow(2, 10 * (o - 1)) + s : e / 2 * (2 - Math.pow(2, -10 * --o)) + s
        }
    }), t(".back-to-top").on("click", function(o) {
        o.preventDefault(), t("html,body").animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    }), t(window).on("scroll", function() {
        var o;
        0 !== t(".count").length && (o = t(".count").offset().top - window.innerHeight), t(window).scrollTop() > o && t(".count").each(function() {
            var o = t(this),
                s = o.attr("data-count");
            t({
                countNum: o.text()
            }).animate({
                countNum: s
            }, {
                duration: 1e3,
                easing: "swing",
                step: function() {
                    o.text(Math.floor(this.countNum))
                },
                complete: function() {
                    o.text(this.countNum)
                }
            })
        })
    }), t("#simple-timer").syotimer({
        year: 2019,
        month: 1,
        day: 31,
        hour: 0,
        minute: 0
    }), AOS.init()
}(jQuery);
});