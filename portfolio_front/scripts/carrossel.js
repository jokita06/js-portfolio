let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function carregar_cards() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].style.backgroundColor = '#345a8f';
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2 * stt}) perspective(20px) rotateY(-0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(4px)';
        items[i].style.backgroundColor = '#041834';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for(var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(4px)';
        items[i].style.backgroundColor = '#041834';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
carregar_cards();

next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    carregar_cards();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    carregar_cards();
}