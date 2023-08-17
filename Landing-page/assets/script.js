//menu principal
function toggleElementDisplay(element) {
    if (element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

function clickHbg() {
    toggleElementDisplay(menuHbg);
    toggleElementDisplay(logo);
    toggleElementDisplay(cart);
}



//parte de navegação
let left = document.getElementsByClassName('bx-left-arrow-alt')[0];
let right = document.getElementsByClassName('bx-right-arrow-alt')[0];
let cards = document.getElementsByClassName('cards')[0];






//Parte da lista
left.addEventListener('click', () => {
    cards.scrollLeft -= 100;
})

right.addEventListener('click', () => {
    cards.scrollLeft += 100;
})






//Imagem principal
let poster = document.getElementById('poster');
let title = document.getElementById('titulo');
let price = document.getElementById('valor-conteudo');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    //console.log(ele)
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})




//lista da coleção
function toggleMenu(menuToShow, menuToHide1, menuToHide2, menuToHide3, menuToHide4) {
    menuToShow.style.display = 'grid';
    menuToHide1.style.display = 'none';
    menuToHide2.style.display = 'none';
    menuToHide3.style.display = 'none';
    menuToHide4.style.display = 'none';
}

function clickColecao() {
    toggleMenu(menu, menu2, menu3, menu4, menu5);
}

function clickColecao2() {
    toggleMenu(menu2, menu, menu3, menu4, menu5);
}

function clickColecao3() {
    toggleMenu(menu3, menu, menu2, menu4, menu5);
}

function clickColecao4() {
    toggleMenu(menu4, menu, menu2, menu3, menu5);
}

function clickColecao5() {
    toggleMenu(menu5, menu, menu2, menu3, menu4);
}

