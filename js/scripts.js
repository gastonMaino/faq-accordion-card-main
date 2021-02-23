const question = document.querySelectorAll('.faq__question');

question.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('faq__question--active');
        item.children[0].classList.toggle('faq__img--active');
        item.nextElementSibling.classList.toggle('faq__answer--active');
    })
})
