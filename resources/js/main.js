/* =============================================================
   Asif Mahmud Rony — portfolio
   ============================================================= */

$(document).ready(function () {

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------
       Header: condense once the hero is behind us
       --------------------------------------------------------- */
    var $header = $('#siteHeader');

    function syncHeader() {
        $header.toggleClass('is-stuck', window.scrollY > 40);
    }

    syncHeader();
    $(window).on('scroll', syncHeader);

    /* ---------------------------------------------------------
       Mobile nav
       --------------------------------------------------------- */
    var $toggle = $('.site-nav__toggle');
    var $navList = $('#primaryNav');

    function closeNav() {
        $navList.removeClass('is-open');
        $toggle.attr('aria-expanded', 'false').attr('aria-label', 'Open menu');
        $('body').css('overflow', '');
    }

    $toggle.on('click', function () {
        var open = $navList.toggleClass('is-open').hasClass('is-open');
        $toggle.attr('aria-expanded', String(open))
            .attr('aria-label', open ? 'Close menu' : 'Open menu');
        $('body').css('overflow', open ? 'hidden' : '');
    });

    $navList.on('click', 'a', closeNav);

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $navList.hasClass('is-open')) {
            closeNav();
            $toggle.focus();
        }
    });

    /* ---------------------------------------------------------
       Scroll reveal — one orchestrated rise, staggered per section
       --------------------------------------------------------- */
    var $reveals = $('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        $reveals.addClass('is-in');
    } else {
        // stagger siblings within each section so a band resolves as one movement
        $('section, footer').each(function () {
            $(this).find('.reveal').each(function (i) {
                this.style.setProperty('--reveal-delay', Math.min(i, 6) * 70 + 'ms');
            });
        });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

        $reveals.each(function () { io.observe(this); });
    }

    /* ---------------------------------------------------------
       Nav: mark the section currently in view
       --------------------------------------------------------- */
    var $navLinks = $('.site-nav__list a[href^="#"]');
    var sections = $navLinks.map(function () {
        var el = document.querySelector($(this).attr('href'));
        return el ? { link: this, el: el } : null;
    }).get();

    if (sections.length && 'IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $navLinks.removeClass('is-current');
                    var match = sections.filter(function (s) { return s.el === entry.target; })[0];
                    if (match) { $(match.link).addClass('is-current'); }
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(function (s) { spy.observe(s.el); });
    }

    /* ---------------------------------------------------------
       Testimonial slider
       --------------------------------------------------------- */
    var $slides = $('.testimonial__slide');
    var $tabs = $('.testimonial__tab');

    $tabs.on('click', function () {
        var i = $tabs.index(this);
        $slides.removeClass('is-active').eq(i).addClass('is-active');
        $tabs.removeClass('is-active').attr('aria-selected', 'false');
        $(this).addClass('is-active').attr('aria-selected', 'true');
    });

    /* ---------------------------------------------------------
       Project lightbox
       --------------------------------------------------------- */
    if ($.fn.magnificPopup) {
        $('.work__cards').magnificPopup({
            delegate: 'a.mp-item',
            type: 'image',
            gallery: { enabled: true, navigateByImgClick: true },
            image: { titleSrc: 'title' },
            mainClass: 'mfp-fade',
            removalDelay: 200
        });
    }

    /* ---------------------------------------------------------
       Contact form — Web3Forms
       ---------------------------------------------------------
       Submits as JSON to https://api.web3forms.com/submit. The access key
       lives in the hidden input in index.html, not here, so there is one
       place to change it.

       Progressive enhancement: the <form> keeps its real action/method, so
       if this script fails to load the browser still POSTs natively and
       Web3Forms handles it — the page just loses the inline status message.
       --------------------------------------------------------- */
    var MAILTO = 'asifmrony@gmail.com';
    var ENDPOINT = 'https://api.web3forms.com/submit';

    var $form = $('#contactForm');
    var $status = $('#formStatus');
    var $send = $form.find('.field__send');

    // textarea grows with its content
    $form.find('textarea').on('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    function setError($field, message) {
        $field.toggleClass('is-invalid', Boolean(message));
        $field.find('.field__error').text(message || '');
    }

    function validate() {
        var ok = true;

        var $name = $('#cf-name');
        var $email = $('#cf-email');
        var $message = $('#cf-message');

        if (!$name.val().trim()) {
            setError($name.closest('.field'), 'Please add your name so I know who I am replying to.');
            ok = false;
        } else {
            setError($name.closest('.field'), '');
        }

        var email = $email.val().trim();
        if (!email) {
            setError($email.closest('.field'), 'Please add an email address so I can reply.');
            ok = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
            setError($email.closest('.field'), 'That address looks incomplete — check for a typo.');
            ok = false;
        } else {
            setError($email.closest('.field'), '');
        }

        if (!$message.val().trim()) {
            setError($message.closest('.field'), 'A sentence or two about the project is enough to start.');
            ok = false;
        } else {
            setError($message.closest('.field'), '');
        }

        return ok;
    }

    function setStatus(message, state) {
        $status.removeClass('is-ok is-error');
        if (state) { $status.addClass(state); }
        $status.text(message || '');
    }

    function setBusy(busy) {
        $send.prop('disabled', busy).attr('aria-busy', busy ? 'true' : 'false');
        $form.toggleClass('is-sending', busy);
    }

    $form.on('submit', function (e) {
        e.preventDefault();

        if (!validate()) {
            setStatus('');
            $form.find('.field.is-invalid').first().find('input, textarea').focus();
            return;
        }

        // Honeypot: a real visitor never sees this box. Report success to the
        // bot and send nothing.
        if ($form.find('input[name="botcheck"]').is(':checked')) {
            setStatus('Thanks — your message has been sent.', 'is-ok');
            return;
        }

        var name = $('#cf-name').val().trim();
        var email = $('#cf-email').val().trim();
        var message = $('#cf-message').val().trim();
        var accessKey = $form.find('input[name="access_key"]').val();

        if (!accessKey) {
            setStatus('The form is not configured yet. Please email ' + MAILTO + ' directly.', 'is-error');
            return;
        }

        setBusy(true);
        setStatus('Sending…');

        $.ajax({
            url: ENDPOINT,
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                message: message,
                replyto: email,
                subject: 'Project enquiry from ' + name,
                from_name: 'asifmrony.github.io'
            })
        }).done(function (data) {
            if (data && data.success) {
                setStatus('Thanks — your message is on its way. I reply within a working day.', 'is-ok');
                $form[0].reset();
                // the auto-grown textarea needs its height reset too
                $form.find('textarea').css('height', '');
                $form.find('.field').removeClass('is-invalid').find('.field__error').text('');
            } else {
                setStatus((data && data.message ? data.message : 'That did not go through') +
                    '. Please email ' + MAILTO + ' instead.', 'is-error');
            }
        }).fail(function (xhr) {
            var reason = 'Something went wrong sending that';
            if (xhr && xhr.responseJSON && xhr.responseJSON.message) {
                reason = xhr.responseJSON.message;
            } else if (xhr && xhr.status === 0) {
                reason = 'No connection';
            }
            setStatus(reason + '. Your message is still in the form — or email ' + MAILTO + ' directly.', 'is-error');
        }).always(function () {
            setBusy(false);
        });
    });

});
