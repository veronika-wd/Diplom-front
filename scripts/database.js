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


const toSearch = document.getElementById('search-inp').addEventListener('input', () => {
const search = document.getElementById('search-inp').value.toLowerCase();

if( search !== '') {
    const results = pupils.filter(item => item.includes(search));
    if(results.length === 0){
        document.getElementById('database-tabel').innerHTML = '<p>Ничего не найдено</p>';
    } else{
        console.log(results);
        const table = new Tabulator("#database-table", {
            data: results,  // данные
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
    }
}
})



