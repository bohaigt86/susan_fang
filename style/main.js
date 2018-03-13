var menuItem1 = document.getElementsByClassName('menu-item')[0];
var menuItem2 = document.getElementsByClassName('menu-item')[1];
var menuItem3 = document.getElementsByClassName('menu-item')[2];

let menuItem1HTML = menuItem1.innerHTML;
let menuItem2HTML = menuItem2.innerHTML;
let menuItem3HTML = menuItem3.innerHTML;


menuItem1.addEventListener('mouseover', introCharItem1);
menuItem2.addEventListener('mouseover', introCharItem2);
menuItem3.addEventListener('mouseover', introCharItem3);

menuItem1.addEventListener('mouseleave', delCharItem1);
menuItem2.addEventListener('mouseleave', delCharItem2);
menuItem3.addEventListener('mouseleave', delCharItem3);


function introCharItem1() {
  introChar(menuItem1);
}

function introCharItem2() {
  introChar(menuItem2);
}

function introCharItem3() {
  introChar(menuItem3);
}

function introChar(itemId) {
  itemId.innerHTML = "_" + itemId.innerHTML;
}

function delCharItem1() {
  menuItem1.innerHTML = menuItem1HTML;
}

function delCharItem2() {
  menuItem2.innerHTML = menuItem2HTML;
}

function delCharItem3() {
  menuItem3.innerHTML = menuItem3HTML;
}
