javascript
document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewInput = document.getElementById('reviewInput');
    const submitReviewBtn = document.getElementById('submitReviewBtn');
    const thankYouMessage = document.getElementById('thankYouMessage');

    submitReviewBtn.addEventListener('click', function () {
        const reviewText = reviewInput.value.trim();

        if (reviewText !== '') {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.textContent = reviewText;

            reviewsContainer.appendChild(reviewElement);

            // Очистка поля ввода
            reviewInput.value = '';

            // Показать сообщение "Спасибо за отзыв"
            thankYouMessage.style.display = 'block';
        } else {
            alert('Пожалуйста, введите отзыв перед отправкой.');
        }
    });
});