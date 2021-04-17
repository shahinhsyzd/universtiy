const navigation = document.querySelector('nav');
const btnOpen = document.querySelector('.fa-bars');
const btnClose = document.querySelector('.fa-times');

btnOpen.addEventListener('click', function () {
    navigation.style.right = '0';
})
btnClose.addEventListener('click', function () {
    navigation.style.right = '-300px';
})