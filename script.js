let btn = document.getElementById('icon');
let list = document.getElementById('link');

btn.addEventListener('click', () => {
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
});