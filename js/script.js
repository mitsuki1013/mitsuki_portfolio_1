// wow初期化
new WOW().init();

// header実装
$(function() {
    var _window = $(window)
    var _header = $('.header-menu')
 
_window.on('scroll',function(){     
    heroBottom = $('.header-top-wrapper').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});

_window.trigger('scroll');
});


// ハンバーガーメニュー
$(function() {
  $('.menu-bar').on('click', function () {
   $(this).toggleClass('open');
   $('.header-nav-menu').toggleClass('open');
   $('.header-nav-base').toggleClass('open');
  });

  $('.header-nav-menu-link').on('click', function() {
    $('.header-nav-menu').removeClass('open');
    $('.header-nav-base').removeClass('open');
    $('.menu-bar').removeClass('open');
  })
});


// スムーススクロール
jQuery('a[href^="#"]').click(function() {
  if (window.matchMedia( '(min-width: 992px)' ).matches) {
    let header = jQuery(".header-menu").innerHeight(); 
    let speed = 500;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    
    let position = jQuery(target).offset().top - header;
    
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;

  } else {
    let speed = 500;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  }
});


// 画像のモーダル表示
$('.portfolio-img img').click(function(){
  var imgSrc = $(this).attr('src');
  
  $('.bigImg').children().attr('src', imgSrc);

  $('.modal').fadeIn();
  $('body,html').css('overflow-y', 'hidden');

  return false
  
});

$('.close-btn').click(function() {
  $('.modal').fadeOut();
  
  $('body,html').css('overflow-y', 'visible');
 
  return false
});


// お問い合わせ実装
let $form = $('#js-form')
  $form.submit(function (e) { 
  $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
      0: function () { 
      //送信に成功したときの処理 
        $form.slideUp(500);
        $('.true-message').addClass('true');
      }, 
      200: function () { 
      //送信に失敗したときの処理 
        $form.addClass('true');
        $('.false-message').addClass('false');
      } 
    } 
  }); 
  return false; 
}); 

let $submit = $('.form-submit')
$('#js-form input, #js-form textarea').on('change', function () {
    if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[type="checkbox"]').prop('checked') === true
    ) {
        // 全て入力できた時
        $submit.prop('disabled', false)
        $submit.addClass('_active')
    } else {
        // 入力できていない時
        $submit.prop('disabled', true)
        $submit.removeClass('_active')
    }
});


$(function(){
  var topBtn = $('.top-btn');
  topBtn.hide();
  $(window).scroll(function(){
      if($(this).scrollTop()>80){
          topBtn.fadeIn(300);
      }else{
          topBtn.fadeOut(300)
      }
  })

    topBtn.click(function(){
        $('html').animate({
            scrollTop: 0
        }, 300);
        return false
    });
});