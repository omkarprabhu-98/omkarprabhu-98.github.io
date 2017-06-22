/**
 * Created by Admin on 13-Jun-17.
 */

$(document).ready(function(){

    // tab navigation selection
    $(".col.s6").on("click",
        function () {

            if(!$(this).hasClass("active")){
                $(".col.s6.active").removeClass("active");
                $(this).addClass("active");
            }


        }
    );








});