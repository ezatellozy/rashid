
; (function ($) {
    'use strict'
    var wprtTheme = {
               // Main init function
               init : function() {
                this.config();
                this.events();
            },
    
            // Define vars for caching
            config : function() {
                this.config = {
                    $window : $(window),
                    $document : $(document),
                };
        },
        events : function() {
            var self = this;

            // Run on document ready
            self.config.$document.on( 'ready', function() {
                // Mobile Navigation
                self.preLoader();
                self.mobileNav();
                self.spacer();
                self.counter();
                self.projectFilter();
                self.serviceSlider();
               
                self.galleriesFlex();
                self.popupImage();
                self.team();
            });
  
        },
        popupImage: function() {
            if ($().magnificPopup) {
                $('.wprt-galleries, .wprt-galleries-grid').each(function () {
                    console.log($(this).find('.zoom'))

                    $(this).find('.zoom').magnificPopup({
                        disableOn: 700,
                        type: 'image',
                        gallery:{
                            enabled: true
                        },
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: true
                    });
                });
            }
        },
        preLoader: function() {
            if ( $().animsition ) {
                $(".animsition").animsition({
                    inClass: 'fade-in',
                    outClass: 'fade-out',
                    inDuration: 1500,
                    outDuration: 800,
                    loading: true,
                    loadingParentElement: 'body',
                    loadingClass: 'animsition-loading',
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: [
                        '-webkit-animation-duration',
                        '-moz-animation-duration',
                        'animation-duration'
                        ],
                    overlay: false,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body',
                    transition: function(url){ window.location.href = url; }
                });
            }
        },
        mobileNav: function () {
            var menuType = 'desktop';
    
            $(window).on('load resize', function () {
                var mode = 'desktop';
                var $wrapMenu = $('#site-header-inner .wrap-inner');
    
                if (matchMedia('only screen and (max-width: 991px)').matches)
                    mode = 'mobile';
    
                if (mode != menuType) {
                    menuType = mode;
    
                    if (mode == 'mobile') {
                        $('#main-nav').attr('id', 'main-nav-mobi')
                            .appendTo('#site-header')
                            .hide()
                            .find('li:has(ul)')
                            .children('ul')
                            .hide()
                            .before('<span class="arrow"></span>');
                    } else {
                        if ($('#site-header').is('.style-2, .style-3, .style-4'))
                            $wrapMenu = $('.site-navigation-wrap .inner');
    
                        $('#main-nav-mobi').attr('id', 'main-nav')
                            .removeAttr('style')
                            .prependTo($wrapMenu)
                            .find('.sub-menu')
                            .removeAttr('style')
                            .prev().remove();
                                    
                        $('.mobile-button').removeClass('active');
                    }
                }
            });
    
            $(document).on('click', '.mobile-button', function () {
                $(this).toggleClass('active');
                $('#main-nav-mobi').slideToggle();
            })
    
            $(document).on('click', '#main-nav-mobi .arrow', function () {
                $(this).toggleClass('active').next().slideToggle();
            })
        },
        projectFilter: function() {
            $('.wprt-project').each(function() {
                var
                $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                layout = $this.data("layout"),
                gapH = Number($this.data("gaph")),
                    gapV = Number($this.data("gapv"));

                    $(this).find('#projects').cubeportfolio({
                        layoutMode: layout,
                    filters: '#project-filter',
                    defaultFilter: '*',
                    animationType: 'quicksand',
                    gapHorizontal: gapH,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: true,
                    auto: false,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: '',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
            });
        },



        spacer: function() {
            $(window).on('load resize', function() {
                $('.wprt-spacer').each(function(){
                    if ( $(window).width() > 991 ) {
                        $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                    } else if ( $(window).width() > 767 ) {
                        $(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
                    } else {
                        $(this).attr('style', 'height:' + $(this).data('smobi') + 'px') 
                    }
                })
            });
        },
        serviceSlider: function() {
            $('.wprt-service').each(function() {
                var
                $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                layout = $this.data("layout"),
                gapH = Number($this.data("gaph")),
                gapV = Number($this.data("gapv"));

                $(this).find('#service-wrap').cubeportfolio({
                    layoutMode: layout,
                    defaultFilter: '*',
                    animationType: 'quicksand',
                    gapHorizontal: gapH,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: true,
                    auto: false,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: ' ',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
            });
        },
        counter: function() {
            if ($().countTo) {
            
                $('.wprt-counter').on('on-appear', function () {
                    console.log("true")
                    $(this).find('.number').each(function() {
                        var to = parseInt( $(this).data('to'), 10 ),
                            speed = parseInt( $(this).data('speed'), 10 );
                            
                        $(this).countTo({
                            to: to,
                            speen: speed
                        });
                    });
                }); //counter
            }
        },
        team: function() {
            $('.wprt-team').each(function() {
                var
                $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                gapV = Number($this.data("gapv"));

                $(this).find('#team-wrap').cubeportfolio({
                    layoutMode: 'slider',
                    defaultFilter: '*',
                    animationType: 'quicksand',
                    gapHorizontal: 0,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: false,
                    auto: true,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: 'pushTop',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
            });
        },
        galleriesFlex: function() {
            $('.wprt-galleries').each(function(){
                var itemW = $(this).data("width");
                var itemM = $(this).data("margin");

                $(this).children('#wprt-carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: itemW,
                    itemMargin: itemM,
                    asNavFor: $(this).children('#wprt-slider'),
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>'
                });
                $(this).children('#wprt-slider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: $(this).children('#wprt-carousel'),
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>'
                });
            });
        },
    }
    wprtTheme.init();
})(jQuery);


const defaultLocale = window.localStorage.getItem('locale')|| "en";


let locale;

let translations = {};
document.addEventListener("DOMContentLoaded", () => {
    // Translate the page to the default locale
    setLocale(defaultLocale);
    bindLocaleSwitcher(defaultLocale);
});
  
async function setLocale(newLocale) {
    if (newLocale === locale) return;
    if (newLocale == 'ar') {
        document.body.setAttribute('dir', 'rtl')
    } else {
        document.body.setAttribute('dir', 'ltr')
        
    }
    const newTranslations = 
      await fetchTranslationsFor(newLocale);
    locale = newLocale;
    translations = newTranslations;
    translatePage();
}
  
async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`../lang/${newLocale}.json`);
    return await response.json();
}
  
function translatePage() {
    document
      .querySelectorAll("[data-i18n-key]")
      .forEach(translateElement);
  }
  // Replace the inner text of the given HTML element
  // with the translation in the active locale,
  // corresponding to the element's data-i18n-key
  function translateElement(element) {
      const key = element.getAttribute("data-i18n-key");


     
      const translation = translations[key];
      element.innerHTML = translation;
      if (element.tagName == 'INPUT') {
          element.setAttribute('placeholder', translation )
          
           } else{
            element.innerHTML = translation;
           }
  }

  function bindLocaleSwitcher(initialValue) {
    const switcher = 
      document.querySelector("[data-i18n-switcher]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
      // Set the locale to the selected option[value]
      window.localStorage.setItem('locale', e.target.value)
      setTimeout(() => {
          setLocale(e.target.value);  
          window.location.reload()
        },300)
    };
  }