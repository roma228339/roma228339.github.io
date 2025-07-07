  // Анимации при скролле
        document.addEventListener('DOMContentLoaded', function () {
            // Анимация карточек
            const featureCards = document.querySelectorAll('.feature-card');
            const timelineItems = document.querySelectorAll('.timeline-item');
            const galleryItems = document.querySelectorAll('.gallery-item');

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
                featureCards.forEach(card => {
                    if (isElementInViewport(card)) {
                        card.classList.add('visible');
                    }
                });

                timelineItems.forEach(item => {
                    if (isElementInViewport(item)) {
                        item.classList.add('visible');
                    }
                });

                galleryItems.forEach(item => {
                    if (isElementInViewport(item)) {
                        item.classList.add('visible');
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


         document.addEventListener('DOMContentLoaded', () => {
            const burgerBtn = document.querySelector('.burger-btn');
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuOverlay = document.querySelector('.menu-overlay');
            const logo = document.querySelector('.logo');

            // Открытие/закрытие меню
            burgerBtn.addEventListener('click', () => {
                burgerBtn.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                menuOverlay.classList.toggle('active');
                logo.classList.toggle('active');
                
                // Блокировка прокрутки при открытом меню
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });

            // Закрытие меню при клике на оверлей
            menuOverlay.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                logo.classList.remove('active');
                document.body.style.overflow = '';
            });
// Закрытие меню при клике на ссылку
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    burgerBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    logo.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Закрытие меню при изменении размера окна
            window.addEventListener('resize', () => {
                if (window.innerWidth > 992) {
                    burgerBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    logo.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });