const paragraphs = document.querySelectorAll('.paragraph');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.style.backgroundColor  = 'grey';
    });
});