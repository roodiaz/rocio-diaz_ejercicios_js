const paragraphs = document.querySelectorAll('.paragraph');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.style.backgroundColor  = 'grey';
    });
});