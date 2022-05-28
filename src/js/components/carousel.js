import Swiper, {Pagination} from 'swiper';

Swiper.use([Pagination]);

const Carousel = (container) => {

  let paginationBulletName = [];
    $('.benefits__item__info').each((i,el) => paginationBulletName.push($(el).data('name')))

  const swiper = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.2,
      },
      1025: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet:
            function (index, className) {
              return '<span class="h3 ' + className + '">' + (paginationBulletName[index]) + "</span>";
            },
        },
      }
    },
  });
}
export default Carousel;