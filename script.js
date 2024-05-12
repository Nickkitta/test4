const slider = document.querySelector('.slider');
const sliderA = document.querySelector('.slider-a');
const sliderB = document.querySelector('.slider-b');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slidesA = Array.from(sliderA.querySelectorAll('img'));
const slidesB = Array.from(sliderB.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  slidesA.forEach((slide, index) => {
    if (index === (slideIndex - 1 + slideCount) % slideCount) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  slidesB.forEach((slide, index) => {
    if (index === (slideIndex + 1) % slideCount) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

// Получаем элементы кнопки и данных для копирования
const copyButton = document.getElementById('copyButton');
const dataToCopy = document.getElementById('dataToCopy');

// Функция для копирования данных в буфер
function copyData() {
  // Получаем значение из атрибута data-value
  const valueToCopy = dataToCopy.getAttribute('data-value');
  
  // Создаем временный элемент для работы с буфером
  const tempInput = document.createElement('input');
  
  // Устанавливаем значение для копирования
  tempInput.value = valueToCopy;
  
  // Добавляем элемент в DOM для того, чтобы его можно было выбрать
  document.body.appendChild(tempInput);
  
  // Выбираем элемент и копируем его содержимое
  tempInput.select();
  document.execCommand('copy');
  
  // Удаляем временный элемент из DOM
  document.body.removeChild(tempInput);
}

// Добавляем обработчик события клика к кнопке
copyButton.addEventListener('click', copyData);


