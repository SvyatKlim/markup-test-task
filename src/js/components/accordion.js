const accordion = (btn, content, container) => {
  const btns = $(container).find(btn);

  btns.each(function (i, el) {

    $(el).on('click', (ev) => {
      ev.stopPropagation();

      let currentContent = $(ev.currentTarget).find(content);

      currentContent.slideToggle('fast', () => {
        $(el).toggleClass('opened');
      });


      btns.each((j, btn) => {
        if(!$(btn).is(el)){
          let btnContent = $(btn).find(content);
          $(btnContent).slideUp('fast', () => {
            $(btn).removeClass('opened');
          });
        }
      })

      let img = $('.js-img');
      let currentAttr = img.attr('src'), newAttr = `../assets/img/picture/${$(el).data('image')}`;
      if(currentAttr!== newAttr) {
        img.fadeOut(300, function () {
          img.attr('src', newAttr)
        });
        img.fadeIn(300);
      }
    });
  })

};

export default accordion;