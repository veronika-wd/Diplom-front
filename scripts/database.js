const pupils = [
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Аванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "8", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Бванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Вванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "1", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "2", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Шванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "4", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Тванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "3", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "4", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"},
    {name: "Иван", surname: "Иванов", patronimyc: "Иванович", birthDate: "12-05-2009", class: "9", passportData: "9520 090909", parent: "Иванова Мария Петровна", parentPhone: "789328743", adrress: " с. Кирба, ул. Щетинкина 9"}, 
]


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



