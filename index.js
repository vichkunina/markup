const button = document.querySelector('.visit-card__scroll-button');

button.addEventListener('click', () => {
    const yCoord = document.querySelector('.features').getBoundingClientRect().top;

    window.scrollTo({
        top: yCoord,
        behavior: 'smooth'
    });
})
