export default function navMobile(btn = '.js-nav', nav = '.js-nav-aside', overlay = '.js-nav-overlay') {

  function openNav() {
    $(btn).each((i, el) => {
      $(el).addClass('active');
    });

    $(nav).removeClass('close').addClass('open');
    $(overlay).addClass('open-menu');
  }

  function closeNav() {
    $(btn).each((i, el) => {
      $(el).removeClass('active');
    });
    $(nav).addClass('close').removeClass('open');
    $(overlay).removeClass('open-menu').addClass('close');
    setTimeout(() => {
      $(overlay).removeClass('close');
    }, 800);
  }

  $('.menu-item a').on('click', () => {
    closeNav()
  })

  $(btn).on('click', (ev) => {
    if ($(ev.currentTarget).hasClass('active')) {
      closeNav();
    } else {
      openNav();
    }
  });

  $(overlay).on('click', (ev) => {
    if ($(ev.target).is($(overlay))) {
      closeNav();
    }
  });
}
