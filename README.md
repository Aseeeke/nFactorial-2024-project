# KinoPoisk
KinoPoisk project - TiltHood - for nFactorial Incubator 2024 by Askar Toleuov
Приложение написано исключительно на html, css, javascript без backend части, с использованием TMDB api для поиска фильмов. Сайт отображает популярные на данный момент фильмы, может отображать фильмы по жанрам и имеет функцию поиска фильмов, актеров, ТВ-шоу. 

## Настройка
Сайт не использует backend части и выполнен локально, так что достаточно лишь скачать его и запустить project.html.

## Процесс проектирования
### 1. Cоздание базового веб-макета
Изначально, я решил отображать на главной странице популярные фильмы, поэтому довольно быстро сверстал первую страницу, еще без подключения API. 

Затем уже подготовив логотип и закончив базовый макет главной страницы, я по схожей логике добавил страницы для поиска по жанрам, результатов поиска, для актеров и тв сериалов.

Я многократно менял структуру сайта и добавлял новые свойства в css файл, но в итоге закончил макет.

### 2. Подключение API и использование javascipt
Получив API ключ TMDb api, я создал генерацию html контента популярных фильмов для главной страницы. 

Немного изменив в очередной раз дизайн, я приступил к реализации функции отображения фильмов по жанру, где использовал схожую логику.

Я также добавил пару фич для удобства пользованием сайта, таких как скролл в топ страницы.

Добавил функцию поиска фильмов, актеров, ТВ шоу c использование API.
## Ошибки
Явных ошибок замечено не было, так как сайт не использует сложных технологий.

## Проблемы
В связи с ограниченным временем на выполнение задания и загруженностью в университете(Midterm exams), не успел добавить backend часть, как задумывалось.

В планах было добавить авторизацию пользователей с базой данных для их хранения, а также список любимых фильмов для каждого пользователя.



