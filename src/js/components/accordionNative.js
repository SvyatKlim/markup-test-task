export default class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('.content');
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }


  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';
    $('details').each((index, el) => {
      if(el !== this.el){
          el.open = false
      }
    });
    this.setHeight(this.el)
    this.setHeight(this.el,false)
    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
    let img = $('.js-img');
    let currentAttr = img.attr('src'), newAttr = `../assets/img/picture/${$(this.el).data('image')}`;
    if(currentAttr!== newAttr) {
      img.fadeOut(300, function () {
        img.attr('src', newAttr)
      });
      img.fadeIn(300);
    }
  }

  shrink() {
    this.isClosing = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 300,
    });
    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => this.isClosing = false;
  }
   setHeight (detail,open)  {
    console.log('setHeight')
    detail.open = open;
    const rect = detail.getBoundingClientRect();
    detail.dataset.width = rect.width;
     detail.style.setProperty(open ? `--expanded` : `--collapsed`, `${rect.height}px`);
  }
  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
    if (this.animation) {
      this.animation.cancel();
    }
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });
    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}
