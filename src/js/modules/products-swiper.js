import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper1 = new Swiper('.swiper-products', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 100,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1620: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    375: {
        slidesPerView: 1
    }
  },
    1: {
        slidesPerView: 1
    }
  
});


// Модальное окно
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('.modal__img');
const modalTitle = modal.querySelector('.modal__title');
const modalDesc = modal.querySelector('.modal__desc');
const modalSize = modal.querySelector('.modal__size');
const closeBtn = modal.querySelector('.modal__close');

// Обработчики для всех кнопок
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        // Заполняем модальное окно данными из карточки
        let imgPath = btn.dataset.img;
        const fileName = imgPath.split('/').pop();
        imgPath = `./img/products/${fileName}`;
        modalImg.src = imgPath;
        modalImg.alt = btn.dataset.title;
        modalDesc.textContent = btn.dataset.desc;
        modalTitle.textContent = btn.dataset.title;
        // modalSize.textContent = btn.dataset.size;
        // modalFeatures.textContent = btn.dataset.features;
        document.body.style.overflow = 'hidden'; // Блокируем скролл
        document.body.style.width = '100%'; 
        
        // Показываем модальное окно
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.visibility = 'visible';
            modal.style.opacity = 1;
        }, 10);
    });
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    modal.style.visibility = 'hidden';
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

// Закрытие по клику вне окна
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeBtn.click();
    }
});