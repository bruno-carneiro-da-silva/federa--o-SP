AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

jQuery(document).ready(function ($) {
  "use strict";

  var alertFunction = function () {
    $(".subscribe").on("click", function () {
      Swal.fire({
        title: "Obrigado pelo seu interesse!",
        text: "Em breve iremos abrir as inscrições e definir as datas do evento.",
        icon: "success",
        confirmButtonText: "Perfeito!",
      });
    });
  };
  alertFunction();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();

  var sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();
      if ($(this).closest(".input-group").find(".form-control").val() != 0) {
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val(
            parseInt(
              $(this).closest(".input-group").find(".form-control").val()
            ) - 1
          );
      } else {
        $(this).closest(".input-group").find(".form-control").val(parseInt(0));
      }
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".input-group")
        .find(".form-control")
        .val(
          parseInt(
            $(this).closest(".input-group").find(".form-control").val()
          ) + 1
        );
    });
  };
  // sitePlusMinus();

  var siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  // siteSliderRange();

  var siteCarousel = function () {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 0,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
          1200: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 4,
          },
        },
      });
    }

    if ($(".nonloop-block-14").length > 0) {
      $(".nonloop-block-14").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 20,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 2,
          },
          1200: {
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
        },
      });
    }

    $(".slide-one-item").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">',
      ],
    });

    if ($(".owl-4-slider").length > 0) {
      var owl4 = $(".owl-4-slider").owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1000,
        items: 4,
        nav: false,
        navText: [
          '<span class="icon-keyboard_backspace"></span>',
          '<span class="icon-keyboard_backspace"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        },
      });

      $(".js-custom-next-v2").click(function (e) {
        e.preventDefault();
        owl4.trigger("next.owl.carousel");
      });
      $(".js-custom-prev-v2").click(function (e) {
        e.preventDefault();
        owl4.trigger("prev.owl.carousel");
      });
    }
  };
  siteCarousel();

  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });
  };
  siteStellar();

  var siteCountDown = function () {
    $("#date-countdown, #date-countdown2").countdown(
      "2025/02/01",
      function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              '<span class="countdown-block"><span class="label">%w</span> semanas </span>' +
              '<span class="countdown-block"><span class="label">%d</span> dias </span>' +
              '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
              '<span class="countdown-block"><span class="label">%M</span> min </span>' +
              '<span class="countdown-block"><span class="label">%S</span> sec</span>'
          )
        );
      }
    );
  };
  siteCountDown();

  var siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();

  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  // navigation
  var OnePageNavigation = function () {
    var navToggler = $(".site-menu-toggle");
    $("body").on(
      "click",
      ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",
      function (e) {
        e.preventDefault();

        var hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          600,
          "easeInOutCirc",
          function () {
            window.location.hash = hash;
          }
        );
      }
    );
  };
  // OnePageNavigation();

  var siteScroll = function () {
    $(window).scroll(function () {
      var st = $(this).scrollTop();

      if (st > 100) {
        $(".js-sticky-header").addClass("shrink");
      } else {
        $(".js-sticky-header").removeClass("shrink");
      }
    });
  };
  siteScroll();

  (function ($) {
    "use strict";

    //preloader
    $(window).on("load", function () {
      $("#rts__preloader").delay(0).fadeOut(1000);
    });

    // Common-slider
    var swiper = new Swiper(".rts-cmmnSlider", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        580: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });
    // Common-slider-over
    var swiper = new Swiper(".rts-cmmnSlider-over", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1300: {
          slidesPerView: 5.6,
        },
        1220: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4.5,
        },
        900: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        633: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });
    // Common-slider-over
    var swiper = new Swiper(".rts-cmmnSlider-over2", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1300: {
          slidesPerView: 5.6,
        },
        1220: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4.5,
        },
        900: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        633: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });
    // Common-slider-over
    var swiper = new Swiper(".rts-fiveSlide", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1300: {
          slidesPerView: 5,
        },
        1220: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        633: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });
    // Common-slider-over
    var swiper = new Swiper(".rts-sixSlide-over", {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1600: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        693: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });

    // feature-slider
    var swiper = new Swiper(".rts-featureSlider", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        1093: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });
    // three-slider
    var swiper = new Swiper(".rts-threeSlider", {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,

      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        880: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });

    // One Group slider
    var swiper = new Swiper(".rts-oneGroupSlider", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1500: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });

    var swiperthumb = new Swiper(".SlideThumb", {
      spaceBetween: 10,
      slidesPerView: 3,
      direction: "vertical",
      mousewheel: false,
    });

    // banner slider
    var swiper = new Swiper(".bannerSlide", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 1300,
      loop: true,
      loopFillGroupWithBlank: true,
      fadeEffect: {
        crossFade: true,
      },
      virtualTranslate: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      speed: 1500,

      effect: "fade",
      centeredSlides: false,
      breakpoints: {
        1500: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // banner slider
    var swiper = new Swiper(".oneManual", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 700,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // banner slider
    var swiper = new Swiper(".thumbBannerSlide", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      speed: 700,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      centeredSlides: false,
      breakpoints: {
        1500: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
      thumbs: {
        swiper: swiperthumb,
      },
      navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".oneSlide", {
      slidesPerView: 1,
      spaceBetween: 50,
      slidesPerGroup: 1,
      speed: 700,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      navigation: {
        nextEl: ".slide-next",
        prevEl: ".slide-prev",
      },
      pagination: {
        el: ".swiper-pag",
        clickable: true,
      },
    });

    // No gap slide
    var swiper = new Swiper(".noGapSlide", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      speed: 1500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      breakpoints: {
        1500: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 3,
        },
        450: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // productSlide
    var swiper = new Swiper(".productSlide", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      loop: true,
      direction: "horizontal",
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // productSlide2
    var swiper2 = new Swiper(".productSlide2", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: false,
      navigation: {
        nextEl: ".button-next2",
        prevEl: ".button-prev2",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Video Popup
    if ($(".play-video").length) {
      $(".play-video").magnificPopup({
        delegate: "a",
        type: "iframe",
        removalDelay: 0,

        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim"
            );
            this.st.mainClass = this.st.el.attr("data-effect");
          },
        },
        closeOnContentClick: true,
        midClick: true,
      });
    }

    $.extend(true, $.magnificPopup.defaults, {
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
        },
      },
    });

    // Search Bar show & hide
    $(document).on("click", ".search-icon", function () {
      $(".search-input-area").addClass("show");
    });
    $(document).on("click", ".search-input-area input", function () {
      $(".search-input-area").addClass("show");
    });
    $(document).on("click", ".search-input-inner before", function () {
      $(".search-input-area").addClass("show");
    });
    $("html").click(function (e) {
      if (!$(e.target).hasClass("show")) {
        $(".search-input-area").removeClass("show");
      }
      $(document).on("click", ".search-close-icon", function () {
        $(".search-input-area").removeClass("show");
      });
    });

    // Cart Bar show & hide
    $(document).on("click", ".cart-icon", function () {
      $(".cart-bar").addClass("show");
      $(".anywere").addClass("bgshow");
    });
    $(document).on("click", ".close-cart", function () {
      $(".cart-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
    });
    $(document).on("click", ".anywere", function () {
      $(".cart-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
    });

    $(function () {
      var header = $(".start-style");
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
          header.removeClass("start-style").addClass("scroll-on");
        } else {
          header.removeClass("scroll-on").addClass("start-style");
        }
      });
    });

    //Animation
    $(document).ready(function () {
      $("body.hero-anime").removeClass("hero-anime");
    });

    //Menu On Hover
    $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
      if ($(window).width() > 750) {
        var _d = $(e.target).closest(".nav-item");
        _d.addClass("show");
        setTimeout(function () {
          _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
        }, 1);
      }
    });
    //Switch light/dark

    $("#switch").on("click", function () {
      if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#switch").removeClass("switched");
      } else {
        $("body").addClass("dark");
        $("#switch").addClass("switched");
      }
    });

    // Image popup
    $(document).ready(function () {
      $(".image-popup-vertical-fit").magnificPopup({
        type: "image",
        mainClass: "mfp-with-zoom",
        gallery: {
          enabled: true,
        },

        zoom: {
          enabled: true,

          duration: 300,
          easing: "ease-in-out",

          opener: function (openerElement) {
            return openerElement.is("img")
              ? openerElement
              : openerElement.find("img");
          },
        },
      });
    });

    // Sidebar open & close
    $(".hamburger").on("click", function () {
      $(".hamburger").toggleClass("active");
    });

    $(".hamburger").on("click", function () {
      $(".slide-bar").toggleClass("show");
      $(".anywere").addClass("bgshow");
      $(".hamburger").addClass("move");
    });
    $(".hamburger-menu").on("click", function () {
      $(".slide-bar").toggleClass("show");
      $(".anywere").addClass("bgshow");
      $(".hamburger").addClass("move");
    });

    $(".slide-bar-close").click("click", function () {
      $(".slide-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
      $(".hamburger-menu").removeClass("nav-open");
    });

    $(".anywere").on("click", function () {
      $(".slide-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
      $(".hamburger").removeClass("active");
    });

    $(".action-item").on("click", function () {
      $(".slide-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
      $(".hamburger").removeClass("active");
    });

    $(function () {
      $(".toggle-menu").on("focus", function () {
        $(".rts-menu").toggleClass("display");
      });
    });
    $(".hamburger-1").on("click", function () {
      $(".hamburger-1").toggleClass("active");
    });

    $(".hamburger-1").on("click", function () {
      $(".slide-bar").toggleClass("show");
      $(".anywere").addClass("bgshow");
      $(".hamburger-1").addClass("move");
    });

    $(".mobile-hamburger-1").click("click", function () {
      $(".slide-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
      $(".hamburger-1").addClass("move");
    });

    $(".anywere").on("click", function () {
      $(".slide-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
      $(".hamburger-menu").removeClass("nav-open");
    });

    $(".action-item").on("click", function () {
      $(".slide-bar").removeClass("show");
      $(".anywere").removeClass("bgshow");
      $(".hamburger-menu").removeClass("nav-open");
    });

    $(function () {
      $(".toggle-menu").on("focus", function () {
        $(".rts-menu").toggleClass("display");
      });
    });

    /*------------------------------------
      Mobile Menu
    --------------------------------------*/

    $(".hamburger-menu").on("click", function () {
      $(".hamburger-menu").toggleClass("nav-open");
    });

    $("#mobile-menu-active").metisMenu();

    $("#mobile-menu-active .has-dropdown > a").on("click", function (e) {
      e.preventDefault();
    });

    $(".hamburger-menu > a").on("click", function (e) {
      e.preventDefault();
      $(".slide-bar").toggleClass("show");
      $("body").addClass("on-side");
      $(".body-overlay").addClass("active");
      $(this).addClass("active");
    });

    /* Search
      -------------------------------------------------------*/
    var $searchWrap = $(".search-wrap");
    var $navSearch = $(".nav-search");
    var $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate(
        {
          opacity: "toggle",
        },
        500
      );
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate(
        {
          opacity: "toggle",
        },
        500
      );
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });

    //sticky-menu
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 200) {
        $(".navbar-sticky").removeClass("sticky-menu");
        $(".navbar-sticky-mobile").removeClass("sticky-menu-mobile");
      } else {
        $(".navbar-sticky").addClass("sticky-menu");
        $(".navbar-sticky-mobile").addClass("sticky-menu-mobile");
      }
    });

    // Scroll to top
    var btn = $(".scroll-top-btn");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("jumpTop");
      } else {
        btn.removeClass("jumpTop");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "300"
      );
    });

    $("#nav ul li a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    });

    $("#nav div div a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    });

    $("#nav ul li a[href^='#']").on("click", function (e) {
      e.preventDefault();

      // store hash
      var hash = this.hash;

      // animate
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    });

    $("#nav div div a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    });

    // Filter item
    $(document).on("click", ".filter-btn", function () {
      var show = $(this).data("show");
      $(show).removeClass("hide").siblings().addClass("hide");
    });

    $(document).on("click", ".filter-btn", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    // Isotope Filter
    var $grid = $(".grid").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function () {
        var number = $(this).find(".number").text();
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function () {
        var name = $(this).find(".name").text();
        return name.match(/ium$/);
      },
    };
    // bind filter button click
    $(".filter-buttons-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue,
      });
    });
    // change is-checked class on buttons
    $(".button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function () {
        $buttonGroup.find(".checked").removeClass("checked");
        $(this).addClass("checked");
      });
    });

    $(function () {
      $(".button").on("click", function () {
        var $button = $(this);
        var $parent = $button.parent();
        var oldValue = $parent.find(".input").val();

        if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 1;
          }
        }
        $parent.find("a.add-to-cart").attr("data-quantity", newVal);
        $parent.find(".input").val(newVal);
      });
    });

    $(".custom-select").each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length;

      $this.addClass("select-hidden");
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next("div.select-styled");
      $styledSelect.text($this.children("option").eq(0).text());

      var $list = $("<ul />", {
        class: "select-options",
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list);
      }

      var $listItems = $list.children("li");

      $styledSelect.on("click", function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("ul.select-options").hide();
          });
        $(this).toggleClass("active").next("ul.select-options").toggle();
      });

      $listItems.on("click", function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
      });

      $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
      });
    });

    $(".header-topbar5").on("click", function () {
      $(".header-topbar5").addClass("close");
    });

    $(".category-item-inner").on("click", function () {
      var cateItem = $(this).parent(".category-item");
      cateItem.toggleClass("show");
      cateItem.siblings(".category-item").removeClass("show");
    });

    $(".color-item").one("click", function () {
      $(this).toggleClass("selected");
    });

    $(".coupon-click").on("click", function () {
      $(".coupon-input-area").toggleClass("show");
    });

    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Timeline Scroll Section
    // --------------------------------------------------------------
    var items = $(".reacttimeline li, .journey-list li"),
      timelineHeight = $(".timeline ul").height(),
      greyLine = $(".default-line"),
      lineToDraw = $(".draw-line");

    if (lineToDraw.length) {
      $(window).on("scroll", function () {
        var redLineHeight = lineToDraw.height(),
          greyLineHeight = greyLine.height(),
          windowDistance = $(window).scrollTop(),
          windowHeight = $(window).height() / 2,
          timelineDistance = $(".reacttimeline").offset().top;

        if (windowDistance >= timelineDistance - windowHeight) {
          var line = windowDistance - timelineDistance + windowHeight;
          if (line <= greyLineHeight) {
            lineToDraw.css({
              height: line + 20 + "px",
            });
          }
        }

        var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
        items.each(function (index) {
          var circlePosition = $(this).offset();
          if (bottom > circlePosition.top) {
            $(this).addClass("in-view");
          } else {
            $(this).removeClass("in-view");
          }
        });
      });
    }

    // Product details popup
    $(".addto-cart").on("click", function () {
      $(".product-details-popup-wrapper").addClass("popup");
      $(".anywere").addClass("bgshow");
    });
    $(".product-bottom-action .view-btn").on("click", function () {
      $(".product-details-popup-wrapper").addClass("popup");
      $(".anywere").addClass("bgshow");
    });
    $(".product-details-popup-wrapper .cart-edit").on("click", function () {
      $(".product-details-popup-wrapper").addClass("popup");
      $(".anywere-home").addClass("bgshow");
    });

    $(".product-details-close-btn").on("click", function () {
      $(".product-details-popup-wrapper").removeClass("popup");
      $(".anywere").removeClass("bgshow");
    });
    $(".anywere").on("click", function () {
      $(".product-details-popup-wrapper").removeClass("popup");
      $(".anywere").removeClass("bgshow");
    });

    $(document).ready(function () {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
      });
    });
  })(jQuery);

  function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
  }

  var nstSlider = $(".nstSlider");

  if (nstSlider.length) {
    $(".nstSlider").nstSlider({
      left_grip_selector: ".leftGrip",
      right_grip_selector: ".rightGrip",
      value_bar_selector: ".bar",
      value_changed_callback: function (cause, leftValue, rightValue) {
        $(this).parent().find(".leftLabel").text(leftValue);
        $(this).parent().find(".rightLabel").text(rightValue);
      },
    });
  }

  $(function () {
    $("#bgndVideo").YTPlayer();
  });
});
