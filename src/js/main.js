import headerOnScroll from "./components/headerOnScroll";
import carousel from "./components/carousel";
import navMobile from "./components/navMobile";
import accordion from "./components/accordion";


$(document).ready(() => {
  headerOnScroll();
  carousel('.js-benefits');
  navMobile();
  accordion('.faq__list__item', '.content', '.faq__list');
});
