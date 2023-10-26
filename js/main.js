/* Theme button */
const navegation_elements = document.querySelectorAll('.elemento-navegacion');
const title = document.getElementById('title-ignition');
const menu = document.querySelector('.navegacion-titulos-padre-2');
$('#navegacion-menu').on('click', () => {
    //$('.navegacion-titulos-padre-2').slideToggle('slow');
    if(menu.style)
    menu.style.display = 'block';
    $('.navegacion-linea').toggleClass('border-radius-10');
    $('#navegacion-menu').toggleClass('rotate-45');
    
})


$('.title-h3').on('click', () => {
    $(event.target).siblings().toggle('slow');
});