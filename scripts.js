const navigation = document.querySelector('nav');
const btnOpen = document.querySelector('.fa-bars');
const btnClose = document.querySelector('.fa-times');
const showcase = document.querySelector('.showcase');

showcase.addEventListener('click', function () {
    navigation.style.right = '-300px';
})
btnOpen.addEventListener('click', function () {
    navigation.style.right = '0';
})
btnClose.addEventListener('click', function () {
    navigation.style.right = '-300px';
})