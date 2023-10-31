/* Menu button */
const menu_mobile_button = document.getElementById('menu-mobile');
const menu_mobile = document.getElementById('navegacion-mobile');
const btn_cerrar = document.getElementById('btn-cerrar');

menu_mobile_button.addEventListener('click', () => {
    menu_mobile_button.style.display = 'none';
    menu_mobile.style.display = 'flex';
})

btn_cerrar.addEventListener('click', () => {
    menu_mobile.style.display = 'none';
    menu_mobile_button.style.display = 'flex';
});