var AjaxForm = {

    initialize: function (afConfig) {
        if (!jQuery().ajaxForm) {
            document.write('<script src="' + afConfig['assetsUrl'] + 'js/lib/jquery.form.min.js"><\/script>');
        }
        if (!jQuery().jGrowl) {
            document.write('<script src="' + afConfig['assetsUrl'] + 'js/lib/jquery.jgrowl.min.js"><\/script>');
        }

        $(document).ready(function () {
            $.jGrowl.defaults.closerTemplate = '<div>[ ' + afConfig['closeMessage'] + ' ]</div>';
        });

        $(document).off('submit', afConfig['formSelector']).on('submit', afConfig['formSelector'], function (e) {
            $(this).ajaxSubmit({
                dataType: 'json',
                data: {pageId: afConfig['pageId']},
                url: afConfig['actionUrl'],
                beforeSerialize: function (form) {
                    form.find(':submit').each(function () {
                        if (!form.find('input[type="hidden"][name="' + $(this).attr('name') + '"]').length) {
                            $(form).append(
                                $('<input type="hidden">').attr({
                                    name: $(this).attr('name'),
                                    value: $(this).attr('value')
                                })
                            );
                        }
                    })
                },
                beforeSubmit: function (fields, form) {
                    //noinspection JSUnresolvedVariable
                    if (typeof(afValidated) != 'undefined' && afValidated == false) {
                        return false;
                    }
                    form.find('.error').html('');
                    form.find('.error').removeClass('error');
                    form.find('input,textarea,select,button').attr('disabled', true);
                    return true;
                },
                success: function (response, status, xhr, form) {
                    // Разблокируем все поля формы
                    form.find('input, textarea, select, button').attr('disabled', false);
                
                    // Определяем ID или класс формы
                    const formId = form[0].id; // Получаем ID формы
                    const formClass = form.attr('class'); // Получаем класс формы
                
                    console.log("Form ID:", formId);
                    console.log("Form Class:", formClass);
                
                    // Логика для формы "Оставить заявку" (#ostavit_zayavku)
                    if (response.success === true && formId === "ostavit_zayavku") {
                        $('.form-ostavit-zayavku')
                            .fadeIn(400, function () {
                                $('.form-ostavit-zayavku').removeClass('active');
                                $('.form-ostavit-zayavku').css('display', 'none');
                                $('body').removeClass('no-scroll');
                                $('#success-form-ostavit_zayavku')
                                    .css('display', 'block')
                                    .animate({ opacity: 1 }, 200);
                            });
                        $('#success-form-ostavit_zayavku')
                            .animate({ opacity: 1 }, 3000, function () {
                                $('body').removeClass('active-form-zayvka');
                                $('#success-form-ostavit_zayavku').css('display', 'none');
                                $('#success-form-ostavit_zayavku').fadeOut(3000);
                        });
                    }
                
                    // Логика для формы "Заказать услугу" (#zakazat-uslugu-form)
                    if (response.success === true && formId === "zakazat-uslugu-form") {
                        $('#zakazat-uslugu')
                            .fadeIn(400, function () {
                                $('#zakazat-uslugu').removeClass('active');
                                $('#zakazat-uslugu').css('display', 'none');
                                $('body').removeClass('no-scroll');
                                $('#success-form-ostavit_zayavku')
                                    .css('display', 'block')
                                    .animate({ opacity: 1 }, 200);
                            });
                        $('#success-form-ostavit_zayavku')
                            .animate({ opacity: 1 }, 3000, function () {
                                $('body').removeClass('active-form-zayvka');
                                $('#success-form-ostavit_zayavku').css('display', 'none');
                                $('#success-form-ostavit_zayavku').fadeOut(3000);
                        });
                    }
                
                    // Логика для формы "Записаться на приём" (#zakazat_appointment)
                    if (response.success === true && formId === "zakazat_appointment") {
                        $('#zakazat-appointment')
                            .fadeIn(400, function () {
                                $('#zakazat-appointment').removeClass('active');
                                $('#zakazat-appointment').css('display', 'none');
                                $('body').removeClass('no-scroll');
                                $('#success-form-ostavit_zayavku')
                                    .css('display', 'block')
                                    .animate({ opacity: 1 }, 200);
                        });
                        $('#success-form-ostavit_zayavku')
                            .animate({ opacity: 1 }, 3000, function () {
                                $('body').removeClass('active-form-zayvka');
                                $('#success-form-ostavit_zayavku').css('display', 'none');
                                $('#success-form-ostavit_zayavku').fadeOut(3000);
                        });
                    }
                
                    // Логика для формы "Заказать консультацию" (.form_zakazat_konsult)
                    if (response.success === true && formClass.includes("zakazat_konsult")) {
                        $('.form_zakazat_konsult')
                            .fadeIn(400, function () {
                                $('.form_zakazat_konsult').removeClass('active');
                                $('.form_zakazat_konsult').css('display', 'none');
                                $('body').removeClass('no-scroll');
                                $('#success-form-ostavit_zayavku')
                                    .css('display', 'block')
                                    .animate({ opacity: 1 }, 200);
                            });
                        $('#success-form-ostavit_zayavku')
                            .animate({ opacity: 1 }, 3000, function () {
                                $('body').removeClass('active-form-zayvka');
                                $('#success-form-ostavit_zayavku').css('display', 'none');
                                $('#success-form-ostavit_zayavku').fadeOut(3000);
                        });
                    }
                    // Логика для формы "Заказать консультацию" (.form_zakazat_konsult)
                    if (response.success === true && formClass.includes("vacancy_form")) {
                        $('.form-vacancy_form')
                            .fadeIn(400, function () {
                                $('.form-vacancy_form').removeClass('active');
                                $('.form-vacancy_form').css('display', 'none');
                                $('body').removeClass('no-scroll');
                                $('#success-form-ostavit_zayavku')
                                    .css('display', 'block')
                                    .animate({ opacity: 1 }, 200);
                            });
                        $('#success-form-ostavit_zayavku')
                            .animate({ opacity: 1 }, 3000, function () {
                                $('body').removeClass('active-form-zayvka');
                                $('#success-form-ostavit_zayavku').css('display', 'none');
                                $('#success-form-ostavit_zayavku').fadeOut(3000);
                        });
                    }
                    // Логика для формы "Хочу также" (.form-also-want)
                    if (response.success === true && formClass.includes("also_want")) {
                        $('.form-also-want')
                            .fadeIn(400, function () {
                                $('.form-also-want').removeClass('active');
                                $('.form-also-want').css('display', 'none');
                                $('body').removeClass('no-scroll');
                                $('#success-form-ostavit_zayavku')
                                    .css('display', 'block')
                                    .animate({ opacity: 1 }, 200);
                            });
                        $('#success-form-ostavit_zayavku')
                            .animate({ opacity: 1 }, 3000, function () {
                                $('body').removeClass('active-form-zayvka');
                                $('#success-form-ostavit_zayavku').css('display', 'none');
                                $('#success-form-ostavit_zayavku').fadeOut(3000);
                        });
                    }
                
                    // Общая логика для всех форм
                    response.form = form;
                    $(document).trigger('af_complete', response);
                
                    if (!response.success) {
                        AjaxForm.Message.error(response.message);
                        if (response.data) {
                            var key, value, focused;
                            for (key in response.data) {
                                if (response.data.hasOwnProperty(key)) {
                                    if (!focused) {
                                        form.find('[name="' + key + '"]').focus();
                                        focused = true;
                                    }
                                    value = response.data[key];
                                    form.find('.error_' + key).html(value).addClass('error');
                                    form.find('[name="' + key + '"]').addClass('error');
                                }
                            }
                        }
                    } else {
                        AjaxForm.Message.success(response.message);
                        form.find('.error').removeClass('error');
                        form[0].reset();
                        if (typeof grecaptcha !== 'undefined') {
                            grecaptcha.reset();
                        }
                    }
                }
            });
            e.preventDefault();
            return false;
        });

        $(document).on('keypress change', '.error', function () {
            var key = $(this).attr('name');
            $(this).removeClass('error');
            $('.error_' + key).html('').removeClass('error');
        });

        $(document).on('reset', afConfig['formSelector'], function () {
            $(this).find('.error').html('');
            AjaxForm.Message.close();
        });
    }

};


//noinspection JSUnusedGlobalSymbols
AjaxForm.Message = {
    success: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
            $.jGrowl(message, {theme: 'af-message-success', sticky: sticky});
        }
    },
    error: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
            $.jGrowl(message, {theme: 'af-message-error', sticky: sticky});
        }
    },
    info: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
            $.jGrowl(message, {theme: 'af-message-info', sticky: sticky});
        }
    },
    close: function () {
        $.jGrowl('close');
    },
};
