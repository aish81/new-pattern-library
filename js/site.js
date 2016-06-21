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
});