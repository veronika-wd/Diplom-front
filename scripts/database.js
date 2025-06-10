const pupils = [
    {name: "Алексей", surname: "Петров", patronimyc: "Сергеевич", birthDate: "15-03-2010", class: "5", passportData: "4512 123456", parent: "Петрова Ольга Ивановна", parentPhone: "79123456789", adrress: "г. Москва, ул. Ленина, д. 10, кв. 5"},
    {name: "Екатерина", surname: "Смирнова", patronimyc: "Андреевна", birthDate: "22-07-2009", class: "6", passportData: "4513 654321", parent: "Смирнов Андрей Владимирович", parentPhone: "79234567890", adrress: "г. Санкт-Петербург, Невский пр., д. 20"},
    {name: "Дмитрий", surname: "Козлов", patronimyc: "Игоревич", birthDate: "05-11-2008", class: "7", passportData: "4514 789012", parent: "Козлова Татьяна Николаевна", parentPhone: "79345678901", adrress: "г. Новосибирск, ул. Кирова, д. 15, кв. 12"},
    {name: "Анна", surname: "Морозова", patronimyc: "Дмитриевна", birthDate: "30-01-2011", class: "4", passportData: "4515 890123", parent: "Морозов Дмитрий Александрович", parentPhone: "79456789012", adrress: "г. Екатеринбург, ул. Маяковского, д. 5"},
    {name: "Максим", surname: "Лебедев", patronimyc: "Олегович", birthDate: "18-09-2009", class: "6", passportData: "4516 901234", parent: "Лебедева Елена Викторовна", parentPhone: "79567890123", adrress: "г. Казань, ул. Пушкина, д. 30, кв. 8"},
    {name: "София", surname: "Волкова", patronimyc: "Алексеевна", birthDate: "12-12-2010", class: "5", passportData: "4517 012345", parent: "Волков Алексей Сергеевич", parentPhone: "79678901234", adrress: "г. Нижний Новгород, ул. Гагарина, д. 12"},
    {name: "Артём", surname: "Соловьёв", patronimyc: "Владимирович", birthDate: "25-04-2008", class: "7", passportData: "4518 123456", parent: "Соловьёва Наталья Петровна", parentPhone: "79789012345", adrress: "г. Ростов-на-Дону, ул. Садовая, д. 25, кв. 3"},
    {name: "Виктория", surname: "Васильева", patronimyc: "Игоревна", birthDate: "08-08-2011", class: "4", passportData: "4519 234567", parent: "Васильев Игорь Дмитриевич", parentPhone: "79890123456", adrress: "г. Уфа, ул. Лермонтова, д. 7"},
    {name: "Илья", surname: "Зайцев", patronimyc: "Анатольевич", birthDate: "14-02-2009", class: "6", passportData: "4520 345678", parent: "Зайцева Светлана Михайловна", parentPhone: "79901234567", adrress: "г. Красноярск, ул. Мира, д. 18, кв. 10"},
    {name: "Алиса", surname: "Павлова", patronimyc: "Романовна", birthDate: "03-06-2010", class: "5", passportData: "4521 456789", parent: "Павлов Роман Викторович", parentPhone: "79012345678", adrress: "г. Воронеж, ул. Чайковского, д. 14"},
    {name: "Кирилл", surname: "Семёнов", patronimyc: "Павлович", birthDate: "19-10-2008", class: "7", passportData: "4522 567890", parent: "Семёнова Анна Кирилловна", parentPhone: "79123456780", adrress: "г. Пермь, ул. Куйбышева, д. 22, кв. 7"},
    {name: "Полина", surname: "Голубева", patronimyc: "Сергеевна", birthDate: "27-03-2011", class: "4", passportData: "4523 678901", parent: "Голубев Сергей Олегович", parentPhone: "79234567891", adrress: "г. Волгоград, ул. Советская, д. 9"},
    {name: "Даниил", surname: "Виноградов", patronimyc: "Александрович", birthDate: "11-05-2009", class: "6", passportData: "4524 789012", parent: "Виноградова Мария Дмитриевна", parentPhone: "79345678902", adrress: "г. Краснодар, ул. Красная, д. 30, кв. 15"},
    {name: "Елизавета", surname: "Белова", patronimyc: "Андреевна", birthDate: "09-07-2010", class: "5", passportData: "4525 890123", parent: "Белов Андрей Владимирович", parentPhone: "79456789013", adrress: "г. Саратов, ул. Московская, д. 40"},
    {name: "Никита", surname: "Комаров", patronimyc: "Иванович", birthDate: "23-11-2008", class: "7", passportData: "4526 901234", parent: "Комарова Ирина Петровна", parentPhone: "79567890124", adrress: "г. Тюмень, ул. Республики, д. 50, кв. 20"}
];


const table = new Tabulator("#database-table", {
  data: pupils,  // данные
  layout: "fitColumns", // автоподбор ширины
  columns: [
    { title: "Фамилия", field: "surname" },
    { title: "Имя", field: "name" },
    { title: "Отчество", field: "patronimyc" },
    { title: "Дата рождения", field: "birthDate" },
    { title: "Класс", field: "class" },
    { title: "Серия и номер паспорта", field: "passportData" },
    { title: "Родитель", field: "parent" },
    { title: "Номер телефона родителя", field: "parentPhone" },
    { title: "Адресс проживания", field: "adrress" },
  ],
});

const sortByClass = document.getElementById('orderByClass').addEventListener("click", () => {  
    table.setSort([
        {column:"class", dir: "asc"},
    ]);
});

const sortBySurname = document.getElementById('orderBySurname').addEventListener('click', () => {
    table.setSort([
        {column:"surname", dir: "asc"},
    ]);
});

        // Настройка поиска
        const searchInput = document.getElementById('searchInput');
        
        // Функция для выполнения поиска
        function performSearch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if (searchTerm === '') {
                // Если поле пустое, показываем все данные
                table.setData(pupils);
                return;
            }
            
            // Фильтруем товары по всем полям
            const results = pupils.filter(pupil => {
                return (
                    pupil.name.toLowerCase().includes(searchTerm) ||
                    pupil.surname.toLowerCase().includes(searchTerm) ||
                    pupil.patronimyc.toLowerCase().includes(searchTerm) ||
                    pupil.birthDate.toString().includes(searchTerm) ||
                    pupil.class.toString().includes(searchTerm) ||
                    pupil.passportData.toString().includes(searchTerm) ||
                    pupil.parent.toString().includes(searchTerm) ||
                    pupil.parentPhone.toString().includes(searchTerm) ||
                    pupil.adrress.toString().includes(searchTerm)
                );
            });
            // Обновляем таблицу с результатами
            table.setData(results);
        }

        // Слушаем событие input (поиск при вводе)
        searchInput.addEventListener('input', performSearch);



