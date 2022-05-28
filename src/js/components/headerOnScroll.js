const headerOnScroll = () => {
  const offsetScroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = $('.header');

  if (offsetScroll > 0) {
    header.addClass('header-fixed');
  } else {
    header.removeClass('header-fixed');
  }
};

const initHeader = () => {
  headerOnScroll();
  $(window).on('scroll', () => {
    headerOnScroll();
  });
};

export default initHeader;
