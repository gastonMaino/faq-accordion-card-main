const faq = document.getElementById('faq');

faq.addEventListener('click', (e) =>{
    if(e.target.matches('.faq__question')){
        e.target.classList.toggle('faq__question--active');
        e.target.children[0].classList.toggle('faq__img--active');
        e.target.nextElementSibling.classList.toggle('faq__answer--active');   
    }
})