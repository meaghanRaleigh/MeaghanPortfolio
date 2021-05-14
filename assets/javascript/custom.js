$('.btn-toggle').click(function(){
    $(this).next('.collapse').slideToggle('500');
    $(this).find('.btn-toggle i').toggleClass('fa-angle-down fa-angle-right')
});