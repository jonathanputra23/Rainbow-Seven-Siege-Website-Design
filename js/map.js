$(document).ready(function(){
    //when click map
    $('.container .content li a').click(function(e){
        
        let href= e.target.parentElement.getAttribute("href");

        $('.tabContent').each(function(index, element){
            if('#$(element)' != href){
                $(element).removeClass('active');
            }
        })
        $(href).toggleClass('active');
        $('.container .TacticalMap span').click(function () {
            $(href).removeClass('active');
        })

    })
})