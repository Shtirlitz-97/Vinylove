# Верстка главной страницы магазина Vinylove на Gulp сборке
### Учебный проект

**Vinylove** — лендинг для продажи виниловых пластинок на заказ.
Современный адаптивный сайт с каталогом продукции, модальными окнами и интерактивными элементами, созданный с использованием Gulp, SCSS и JavaScript. [Vinylove](https://shtirlitz-97.github.io/Vinylove/) здесь.

Использованные технологии :
- HTML,
- SCSS,
- JavaScript,
- Gulp.

Проект был адаптирован под разрешения 1920px, 768px и 375px.

## Используемые зависимости и плагины
### DevDependencies (для сборки и разработки)
- @babel/core — ядро Babel для транспиляции JS
- @babel/preset-env — пресет для поддержки современных JS-фич
- browser-sync — локальный сервер с live reload
- css-loader — загрузчик CSS для Webpack
- gulp — таск-раннер для автоматизации сборки
- gulp-autoprefixer — добавляет вендорные префиксы в CSS
- gulp-babel — интеграция Babel с Gulp
- gulp-changed — фильтрация изменённых файлов
- gulp-clean — удаление файлов и папок
- gulp-copy — копирование файлов
- gulp-csso — минификация CSS
- gulp-file-include — включение HTML-шаблонов
- gulp-group-css-media-queries — группировка CSS медиа-запросов
- gulp-htmlclean — минификация HTML
- gulp-imagemin — оптимизация изображений
- gulp-newer — пропускает старые файлы
- gulp-notify — уведомления об ошибках и событиях
- gulp-plumber — обработка ошибок в Gulp
- gulp-rename — переименование файлов
- gulp-replace — поиск и замена текста
- gulp-sass — компиляция SCSS в CSS
- gulp-sass-glob — поддержка glob-паттернов в SCSS
- gulp-server-livereload — локальный сервер с livereload
- gulp-sourcemaps — генерация source maps для CSS/JS
- gulp-typograf — автоматическая типографика текста
- gulp-webp — конвертация изображений в WebP
- gulp-webp-html — вставка WebP в HTML
- sass — компилятор SASS (Dart Sass)
- style-loader — загрузчик стилей для Webpack
- webpack-stream — интеграция Webpack с Gulp
### Dependencies (основные зависимости проекта)
- gulp-webp-css — поддержка WebP в CSS
- swiper — слайдер/карусель для веба

## Запуск проекта

Установите менеджер пакет NPM

```
npm install
```

Для запуска локального сервера с автоматической сборкой и обновлением откройте терминал и выполните:
```
gulp dev
```
Для полной сборки готового проекта используйте:
```
gulp docs
```
### Примечания

- Убедитесь, что у вас установлен Node.js и npm.
- При изменениях в исходных файлах сборка и обновление страницы произойдут автоматически.

## Реализованные JS-фичи
- Динамическое модальное окно с подстановкой данных из атрибутов кнопок,
- Слайдеры,
- Мобильная навигация