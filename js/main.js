/**
 * Created by Admin on 13-Jun-17.
 */


$(document).ready(function(){



    // animation timing
    setTimeout(function(){
        $('.TypeIt').css('width','100%');
    }, 2000);


    setTimeout(function(){
        $('#expandable').addClass('active');
    }, 6000);

    setTimeout(function(){

        $('.MainPage').css('display','block');
        $('.MainPage').addClass('active');

    }, 8800);

    setTimeout(function(){
        $('.OnLoadAnimation').remove();
        $('body').css('overflow','');
        $('.tab a').addClass('active');
    }, 9000);













});