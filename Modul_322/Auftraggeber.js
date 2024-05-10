let currentIndex = 0;

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    const itemsCount = document.querySelectorAll('.carousel-item').length;
    if (currentIndex < itemsCount - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function scrollLeft() {
    const carousel = document.querySelector('.carousel');
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}


