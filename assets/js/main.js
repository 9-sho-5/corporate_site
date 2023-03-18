const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    }
  );
}

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
          settings: {
            centerMode: false,        //追記
            centerPadding: "20%",    //追記
          }
        },
        {
          breakpoint: 450, // 768px以下のサイズに適用
          settings: {
            centerMode: false,        //追記
            centerPadding: "0%",    //追記
          }
        },
      ],
});

// fadeIn animation
document.addEventListener("DOMContentLoaded", function(){
    new addAminateClass('.anime');
    new addAminateClass('.anime_fv');
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

//「開く」がクリックされた場合
$(document).on('click', '.ham_menu', function () {
  if ($('body').css('overflow-y') == 'auto') {
      $('.ham_menu[data-state="inactive"]').attr('data-state', 'active');
      $('.window-fixed').css('opacity', '1');
      $('.window-fixed').css('pointer-events', 'all');
      $('.window-fixed').css('transform', 'translateX(0%)');
      $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効s
  } else if ($('body').css('overflow-y') == 'hidden') {
      $('.ham_menu[data-state="active"]').attr('data-state', 'inactive'); // モーダルウィンドウを非表示
      $('.window-fixed').css('opacity', '0');
      $('.window-fixed').css('pointer-events', 'none');
      $('.window-fixed').css('transform', 'translateX(100%)');
      $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
  };
});
$(document).on('click', '.links_wrap a', function () {
  if ($('body').css('overflow-y') == 'auto') {
      $('.ham_menu[data-state="inactive"]').attr('data-state', 'active');
      $('.window-fixed').css('opacity', '1');
      $('.window-fixed').css('pointer-events', 'all');
      $('.window-fixed').css('transform', 'translateX(0%)');
      $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効s
  } else if ($('body').css('overflow-y') == 'hidden') {
      $('.ham_menu[data-state="active"]').attr('data-state', 'inactive'); // モーダルウィンドウを非表示
      $('.window-fixed').css('opacity', '0');
      $('.window-fixed').css('pointer-events', 'none');
      $('.window-fixed').css('transform', 'translateX(100%)');
      $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
  };
});