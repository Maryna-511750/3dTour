const largeImage = document.getElementById('largeImage');
const backButton = document.querySelector('.back-button');
let scale = 1;
let startX = 0, startY = 0;
let currentX = 0, currentY = 0;

// Отримуємо URL зображення з localStorage.
const imageUrl = localStorage.getItem('imageUrl');
if (imageUrl) {
    largeImage.src = imageUrl;
}

// Кнопка "Назад до галереї".
backButton.addEventListener('click', () => {
    window.location.href = 'tour.html';
});

// Масштабування за допомогою коліщатка миші.
largeImage.addEventListener('wheel', (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 5);
    updateTransform();
});

// Панорамування зображення.
largeImage.addEventListener('mousedown', (event) => {
    event.preventDefault();
    startX = event.clientX - currentX;
    startY = event.clientY - currentY;
    largeImage.style.cursor = 'grabbing';

    const onMouseMove = (e) => {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        updateTransform();
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        largeImage.style.cursor = 'grab';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Жест pinch-to-zoom для мобільних пристроїв.
let initialDistance = 0;

largeImage.addEventListener('touchstart', (event) => {
    if (event.touches.length === 2) {
        initialDistance = getDistance(event.touches[0], event.touches[1]);
    }
});

largeImage.addEventListener('touchmove', (event) => {
    if (event.touches.length === 2) {
        const newDistance = getDistance(event.touches[0], event.touches[1]);
        scale *= newDistance / initialDistance;
        scale = Math.min(Math.max(1, scale), 5);
        updateTransform();
        initialDistance = newDistance;
    }
});

// Оновлення стилів трансформації.
function updateTransform() {
    largeImage.style.transform = `scale(${scale}) translate(${currentX}px, ${currentY}px)`;
}

// Розрахунок відстані між двома точками для pinch-to-zoom.
function getDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}