/**
 * Created by ashleigh.henry on 21/06/2016.
 */
console.log("loaded");
$ (function(){
    $('.mobile-nav-items, .search-input-holder').hide();
    $('.menu-button-open').on('click',function(){
        $('.mobile-nav-items').slideToggle();
    })

    $('.nav-search-item-open').on('click',function(){
        $('.search-input-holder').slideToggle();
    })

    $('.main-input-search-trigger').on('click',function(){
        $('.nav-main-nav-full-search').css('display','block').animate({left:0});
    })

    $('.search-close').on('click',function(){
        $('.nav-main-nav-full-search').animate({left:'100%'}).fadeOut('slow');
    })
});