  // Анимации при скролле
        document.addEventListener('DOMContentLoaded', function () {
            // Анимация карточек
            const typeCards = document.querySelectorAll('.type-card');
            const monumentCards = document.querySelectorAll('.monument-card');

            // Функция для проверки видимости элемента
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
                    rect.bottom >= 0
                );
            }

            // Функция для запуска анимации
            function animateOnScroll() {
                typeCards.forEach(card => {
                    if (isElementInViewport(card)) {
                        card.classList.add('visible');
                    }
                });

                monumentCards.forEach(card => {
                    if (isElementInViewport(card)) {
                        card.classList.add('visible');
                    }
                });
            }

            // Запустить при загрузке и при скролле
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);

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
                if (window.scrollY > 100) {
                    header.style.padding = '0.5rem 1rem';
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                } else {
                    header.style.padding = '1rem';
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }
            });
        });