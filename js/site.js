/**
 * Created by ashleigh.henry on 21/06/2016.
 */
console.log("loaded");
$ (function(){
    console.log("ready");
    $('.mobile-nav-items').hide();
    $('.menu-button-open').on('click',function(){
        $('.mobile-nav-items').slideToggle();
    })
});