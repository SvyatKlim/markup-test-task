const accordion = (selector, wrapper = document) => {
  const setHeight = (detail, open = false) => {
    console.log('setHeight')
    detail.open = open;
    const rect = detail.getBoundingClientRect();
    detail.dataset.width = rect.width;
    detail.style.setProperty(open ? `--expanded` : `--collapsed`, `${rect.height}px`);
  }
  const details = $(wrapper).find(selector);

  const RO = new ResizeObserver(entries => {
    return entries.forEach(entry => {
      const detail = entry.target;
      const width = parseInt(detail.dataset.width, 10);
      console.log('width', entry.contentRect.width)
      if (width !== entry.contentRect.width) {
        detail.removeAttribute('style');
        setHeight(detail);
        setHeight(detail, true);
        detail.open = false;
      }
    })
  })
  console.log(RO)
  details.each((i, detail) => {
    $(detail).on('click', () => {
        //
        // details.each((index, el) => {
        //
        //   if(el !== detail){
        //       // $(el).attr('open', false);
        //       el.open = false
        //   }
        // });

      let img = $('.js-img');
      let currentAttr = img.attr('src'), newAttr = `../assets/img/picture/${$(detail).data('image')}`;
      if(currentAttr!== newAttr) {
        img.fadeOut(300, function () {
          img.attr('src', newAttr)
        });
        img.fadeIn(300);
      }

    })

    RO.observe(detail)
    $(window).resize(function () {
      RO.unobserve(detail);
      RO.disconnect(detail);
      // RO.observe(detail)
    })

  });
};

export default accordion;
