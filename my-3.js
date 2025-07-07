 // Анимации при скролле
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
                if (window.scrollY > 100) {
                    header.style.padding = '0.5rem 1rem';
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                } else {
                    header.style.padding = '1rem';
                    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }
            });

            // Калькулятор календаря
            const calculateBtn = document.getElementById('calculateBtn');
            const calendarResult = document.getElementById('calendarResult');

            calculateBtn.addEventListener('click', function () {
                // Здесь должна быть реальная логика преобразования даты
                // Для демонстрации просто показываем результат
                calendarResult.classList.add('active');

                // Генерация случайных значений для демонстрации
                const tzolkinNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                const tzolkinNames = ['Имиш', 'Ик\'', 'Ак\'баль', 'К\'ан', 'Чикчан', 'Кими', 'Маник\'',
                    'Ламат', 'Мулук', 'Ок', 'Чуэн', 'Эб\'', 'Бен', 'Хиш', 'Мен', 'Киб\'',
                    'Кабан', 'Эц\'наб\'', 'Кавак', 'Ахау'];

                const randomNumber = tzolkinNumbers[Math.floor(Math.random() * tzolkinNumbers.length)];
                const randomName = tzolkinNames[Math.floor(Math.random() * tzolkinNames.length)];

                document.querySelector('.tzolkin-result .number').textContent = randomNumber;
                document.querySelector('.tzolkin-result .name').textContent = randomName;
            });

            // Анимация элементов при скролле
            function animateOnScroll() {
                const elements = document.querySelectorAll('.system-card, .tzolkin-day');

                elements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                    if (isVisible) {
                        el.style.opacity = 1;
                        el.style.transform = 'translateY(0)';
                    }
                });
            }

            // Инициализация
            document.querySelectorAll('.system-card, .tzolkin-day').forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            });

            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);
        });