const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

window.addEventListener('scroll', () => {

});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToBottomBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
});