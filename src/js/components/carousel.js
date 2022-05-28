import Swiper, {Pagination} from 'swiper';

Swiper.use([Pagination]);

const Carousel = (container) => {
  const paginationBulletName = ['Targeted Panels', 'Whole Exome Sequencing', 'lcWGS and Microarrays']

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