var navbar = document.getElementById('navbar');
navbar.style.width = '100%';
navbar.style.height = '50px';
navbar.style.backgroundColor = '#333333';

let navbarNodes = document.querySelector('#navbar').childNodes;
let list = document.querySelector('#navbar').firstElementChild;
var lis = list.childNodes;
var lis = list.children;
for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.listStyleType = 'none';
};

let navs = ['home','about','contact','sign in','sign up'];

let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    items[i].textContent = navs[i];
};

let item = document.querySelectorAll('.item');

for (let i = 0; i < item.length; i++) {
    item[i].classList.add('li_style')
};

document.getElementById('list').style.display = 'flex';
document.querySelector('#list').style.width = '100%'
document.getElementById('list').style.justifyContent = 'space-between';
document.getElementById('list').style.alignContent = 'center';
let nav;
var navbar = document.querySelector('#navbar');
nav = navbar.firstElementChild;
for (let i = 0; i < nav.children.length; i++) {
    nav.children[i].style.textTransform = 'capitalize';
}
nav.style.color = '#fff';

var child = document.querySelector('#navbar').children[0];
child.style.height = '100%';
child.style.alignItems = 'center'

var li = document.querySelector('#li');
li.parentNode.style.padding = '6px 15px';