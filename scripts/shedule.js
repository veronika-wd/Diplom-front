const scheduleData = [
  { class: "5", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "5", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "5", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "5", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "5", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "5", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },

{ class: "6", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "6", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "6", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "6", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "6", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "6", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  
{ class: "7", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "7", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "7", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "7", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "7", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "7", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  
{ class: "8", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "8", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "8", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "8", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "8", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "8", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  
{ class: "9", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "9", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "9", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "9", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "9", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "9", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  
{ class: "10", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "10", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "10", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "10", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "10", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "10", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  
{ class: "11", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "11", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "11", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "11", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "11", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson4: "Физика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },
  { class: "11", lesson1: "Математика", lesson2: "Физика", lesson3: "Математика", lesson5: "Математика", lesson6: "Физика", teacher: "Иванов" },

];

const table = new Tabulator("#shedule-table", {
  data: scheduleData,  // данные
  layout: "fitColumns", // автоподбор ширины
  groupBy: "class", 
  columns: [
    { title: "Понедельник", field: "lesson1" },
    { title: "Вторник", field: "lesson2" },
    { title: "Среда", field: "lesson3" },
    { title: "Четверг", field: "lesson4" },
    { title: "Пятница", field: "lesson5" },
  ],
});