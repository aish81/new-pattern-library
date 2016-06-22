/**
 * Created by ashleigh.henry on 21/06/2016.
 */
console.log("loaded");
$ (function(){
    console.log("ready");
    $('.mobile-nav-items, .search-input-holder').hide();
    $('.menu-button-open').on('click',function(){
        $('.mobile-nav-items').slideToggle();
    })

    $('.search-item-open').on('click',function(){
        $('.search-input-holder').slideToggle();
    })


    $('.main-input-search-trigger').on('click',function(){
        $('.full-search').css('display','block').animate({left:0});
    })

    $('.search-close').on('click',function(){
        $('.full-search').animate({left:'100%'}).fadeOut('slow');
    })


});