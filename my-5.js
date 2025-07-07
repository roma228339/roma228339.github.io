 document.addEventListener('DOMContentLoaded', function () {
            // Анимация при скролле
            function animateOnScroll() {
                const timelineItems = document.querySelectorAll('.timeline-item');
                const cityCards = document.querySelectorAll('.city-card');

                timelineItems.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.75 && rect.bottom >= 0) {
                        item.classList.add('visible');
                    }
                });

                cityCards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.75 && rect.bottom >= 0) {
                        card.classList.add('visible');
                    }
                });
            }

            // Инициализация анимации
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);

            // Плавная прокрутка
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

            // Сворачивающиеся секции
            const collapseHeaders = document.querySelectorAll('.collapse-header');
            collapseHeaders.forEach(header => {
                header.addEventListener('click', function () {
                    this.classList.toggle('active');
                    const content = this.nextElementSibling;
                    content.classList.toggle('show');
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