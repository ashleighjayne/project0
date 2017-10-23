/**
 * @namespace Utils
 * @memberof PRSapp
 */
(function($) {
    "use strict";
    PRSapp.Utils = (function() {
        var init,
            caeFlag,
            caeChecked = false;

        init = function(foo) {
            setUpBackToTop();

            removeNoJsClass();

            setUpShowPassword();

            setUpCustomSelect();

            makeTabbedItemVisible();

            // Uncomment this to test tabbing for accessibility
            // $('*').on('focus', function() {

            //     console.log($(this));
            // });
        };

        function setUpBackToTop() {
            $('.back-to-top').on('click', function(e) {
                e.preventDefault();

                $("html, body").animate({ scrollTop: ($('[role="main"]').offset().top - 137) }, 300);

                $(this).blur();
            });
        };

        function triggerBackToTop() {
            $('.back-to-top').click();
        };

        function removeNoJsClass() {
            $('html').removeClass('no-js');
        }

        function setUpShowPassword() {
            if($('.form-control__show-password').length > 0) {

                $('.form-control__show-password').find('.show-password__show').show();

                $('.form-control__show-password').on('click', function(e) {
                    e.preventDefault();

                    var title = $(this).attr('title');

                    if(title === 'Show password') {
                        $(this).parents('.form-group').find('input').attr('type', 'text');
                        $(this).attr('title', 'Hide password');
                    } else if(title === 'Hide password') {
                        $(this).parents('.form-group').find('input').attr('type', 'password');
                        $(this).attr('title', 'Show password');
                    }

                    $('.show-password__show, .show-password__hide').toggle();
                });
            }
        };

        function setUpCustomSelect() {

            // add .ios class to body so we can do custom CSS for drop down arrow
            if (isIos()) {
                $('body').addClass('ios');
            } else {
                if($('select').length > 0) {

                    if ($('select').attr('data-placeholder')) {
                        var options = $('select')[0].options;
                        for (var i = 0; i < options.length; i++) {
                            var option = options[i];
                            if (option.value === '') {
                                option.text = '';
                            }
                        }
                    }


                    $('select').chosen({
                        disable_search_threshold: 50
                    });
                }
            }
        };

        function makeTabbedItemVisible() {
            $(window).keyup(function(e) {

                var code = (e.keyCode ? e.keyCode : e.which);

                if(code === 9) {
                    if($(e.target).parents('.footer').length > 0) {
                        var distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

                        if(distanceFromBottom !== 0) {
                            $('html, body').scrollTop($(document).height());
                        }
                    } else {
                        var scrollTop = $(window).scrollTop(),
                            elementOffset = $(e.target).offset().top,
                            distance = (elementOffset - scrollTop),
                            navigationHeight = $('#navbar').height();

                        if(distance < navigationHeight) {
                            $('html, body').scrollTop(scrollTop - 100);
                        }
                    }
                }

            });
        };

        function isIos() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
        };

        function getScreenWidth() {
            return window.innerWidth;
        };

        function enableButton($element) {
            $element.prop('disabled', false);
        };

        function disableButton($element) {
            $element.prop('disabled', true);
        };

        /**
         * @function checkEmailForCAE
         * @memberof! PRSapp.Utils
         * @param {object} element
         */
        function checkEmailForCAE ($form, data, fromFormSubmit) {

            toggleLoading();

            $.get('/api/account', data, function(data) {
                caeFlag = data.HasMultipleCAEs;

                if(fromFormSubmit && !caeFlag) {
                    $form.submit();
                } else {
                    toggleCAEField(caeFlag);
                }

                toggleLoading();

             }).fail(function() {
            });

        };

        /**
         * @function toggleCAEField
         * @memberof! PRSapp.Login
         * @param {Boolean} caeFlag
         */
        function toggleCAEField(caeFlag) {
            if(caeFlag) {
                $('.cae-container--toggle').removeClass('hidden');
            } else {
                $('.cae-container--toggle').addClass('hidden');
            }
        };

        function toggleLoading() {
            $('.loading').toggleClass('hidden');
        };

        function matchCase(text, pattern) {
            var result = '';

            for(var i = 0; i < text.length; i++) {
                var c = text.charAt(i);
                var p = pattern.charCodeAt(i);

                if(p >= 65 && p < 65 + 26) {
                    result += c.toUpperCase();
                } else {
                    result += c.toLowerCase();
                }
            }

            return result;
        };

        return {
            init : init,
            triggerBackToTop: triggerBackToTop,
            isIos: isIos,
            getScreenWidth: getScreenWidth,
            enableButton: enableButton,
            disableButton: disableButton,
            checkEmailForCAE: checkEmailForCAE,
            toggleCAEField: toggleCAEField,
            toggleLoading: toggleLoading,
            caeChecked: caeChecked,
            matchCase: matchCase
        };
    }());

    PRSapp.Utils.init();
}(jQuery));
