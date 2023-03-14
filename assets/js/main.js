$('.slider').slick({
    arrows: true,
    infinite: true, // スライドのループを有効にするか
    slidesToShow: 1, // 表示するスライド数を設定
    slidesToScroll: 1, // スクロールするスライド数を設定
    centerMode: true,        //追記
    centerPadding: "20%",    //追記
    responsive: [
        {
          breakpoint: 1024, // 1024px以下のサイズに適用
        },
        {
          breakpoint: 768, // 768px以下のサイズに適用
        },
        {
          breakpoint: 450, // 768px以下のサイズに適用
        },
      ],
});

// fadeIn animation
document.addEventListener("DOMContentLoaded", function(){
    new addAminateClass('.anime');
})

class addAminateClass {
    constructor(property){
        const cb = function(entries, observer){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animated');
                }
            });
        }
        this.DOM = {};
        this.DOM.pps = document.querySelectorAll(property);
        this.DOM.io = new IntersectionObserver(cb);
        this.DOM.pps.forEach(pp => this.DOM.io.observe(pp));
    }
}