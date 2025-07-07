 document.addEventListener('DOMContentLoaded', function () {
            // Плавная прокрутка для навигации
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Изменение шапки при скролле
            window.addEventListener('scroll', function () {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.padding = '0.7rem 1rem';
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                } else {
                    header.style.padding = '1rem';
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }
            });

            // Анимация появления карточек при скролле
            function animateCardsOnScroll() {
                const cards = document.querySelectorAll('.culture-card:not(.visible)');
                const windowHeight = window.innerHeight;
                const triggerBottom = windowHeight * 0.8;

                cards.forEach(card => {
                    const cardTop = card.getBoundingClientRect().top;

                    if (cardTop < triggerBottom) {
                        card.classList.add('visible');
                    }
                });
            }

            // Инициализация анимации карточек
            animateCardsOnScroll();
            window.addEventListener('scroll', animateCardsOnScroll);
        });