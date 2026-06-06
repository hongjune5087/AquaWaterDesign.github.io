document.querySelectorAll('.gnb > li').forEach(menu => {

menu.addEventListener('mouseenter', () => {

const sub = menu.querySelector('.submenu');

if(sub){
sub.style.display = 'block';
}

});

menu.addEventListener('mouseleave', () => {

const sub = menu.querySelector('.submenu');

if(sub){
sub.style.display = 'none';
}

});

});
